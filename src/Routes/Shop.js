import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
//  use state: hold the info from api 
// use effect: runs the fetch call when our component mounts

function Shop() {

  const eachItem = [];

  function itemList(products){
    let itemsArray=products
    console.log("itemArray", itemsArray);
    return(
      <h1>Hi</h1>
    )
   }

   function fetchItems(){
      fetch('https://api.bestbuy.com/v1/products(search=toaster&search=stainless&search=steel)?format=json&show=sku,name,image,salePrice&apiKey=mznufc3sxam3w2r7pkdbmnu2')
    .then(response => {
      return response.json()
    })
    .then(data => {
      eachItem.allProducts = data.products
      itemList(eachItem.allProducts);
      // ItemList(eachItem);
      console.log("allprods", eachItem.allProducts)
      return eachItem.allProducts;
    })
    .catch(err => {
      // Do something for an error here
    })
   }
   
  
  let itemsArray = fetchItems();
  console.log("itemsArray OUTSIDE", itemsArray);
  

  return (
    <>
    <h1>Shop Page</h1>
    <div>
      <h1>Hi</h1>
      <h1>{itemsArray.map(itemList)}</h1>
    </div>
    </>
  );
}

export default Shop;