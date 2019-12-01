import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
//  use state: hold the info from api 
// use effect: runs the fetch call when our component mounts

function Shop() {

  let eachItem = [];
  let why = ['why', 'hello'];

  function NameComponent(props){
    console.log("prop", props);
    return(
      <div>
        <h1>{props}</h1>
      </div>
    );
  }

  function looping(oneItem){
    console.log("each HERE:", oneItem);
    return(
      <div>
        <h1>{oneItem}</h1> 
      </div>
    );
  }

  const itemName = function listItem(products){
    var name = products.map(function(prod){
      console.log("itemer", prod.name);
      return eachItem.push(prod.name);
      // return prod.name;
    });
    // console.log("did this work", name);
    // return(
    //   name
    // );
   }

   function RenderName(nname){
    return(
      <div>
        <h1>{nname[0]}</h1>
      </div>
    );
   }

  function ItemList(products){
    let itemsArray=products
    console.log("itemArray2", itemsArray);
    eachItem = itemsArray;
    return (
      <h1>Hola</h1>
    );
   }

  // function Card(props){
  //   return ( 
  //     <div>
  //     <h1>Hola</h1>
  //   <h1>{props.name}</h1>
  //   </div>
  //   );
  // }

  //  function itemList(product) {
  //   return (
  //     <Card
  //       key={product.sku}
  //       name={product.name}
  //     />
  //   );
  // }

   const fetchItems = function getItems() { fetch('https://api.bestbuy.com/v1/products(search=toaster&search=stainless&search=steel)?format=json&show=sku,name,image,salePrice&apiKey=mznufc3sxam3w2r7pkdbmnu2')
    .then(response => {
      return response.json()
    })
    .then(data => {
     let prod = data.products
      // itemList(eachItem.allProducts);
      console.log("allprods", prod)
      // itemList(prod[0]);
      eachItem = itemName(prod);
      ItemList(prod);
      RenderName(prod);
      
      return prod;
    })
    .catch(err => {
      // Do something for an error here
    });
  }
  fetchItems();
  console.log("getItems", fetchItems());
  console.log("eachItemDOOD", eachItem);
  console.log("why", why);
  

  return (
    <>
    <h1>Shop Page</h1>
    <div>
      <h1>Hi</h1>
      {/* <RenderName />
      <ItemList />
      <itemName /> */}
      <h2>{why.map(looping)}</h2>
      <h2>{eachItem}</h2>
      <h2>{eachItem.map(looping)}</h2>
    </div>
    </>
  );
}


export default Shop;