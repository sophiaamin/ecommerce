import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
//  use state: hold the info from api 
// use effect: runs the fetch call when our component mounts

function Shop() {
  // useEffect(() => {
    // fetchItems();
  // },[]); // only run when components mounts

   // state to put the items in
   const [items, setItems] = useState([]);


  const productContainer = document.getElementById('products');
   // fetch api
  let fetchItems = fetch('https://api.bestbuy.com/v1/products(search=toaster&search=stainless&search=steel)?format=json&show=sku,name,image,salePrice&apiKey=mznufc3sxam3w2r7pkdbmnu2')
    .then((res) => {
      return res.json();
    }).then((res) => {
      const products = res.products;
      console.log("products", products)
      
      return products;


      
      // for(let i = 0; i<products.length; i++){
      //   let currProduct = products[i];
      //   console.log("current",currProduct);
      //   // setItems(currProduct);
      // }
      // setItems(fetchItems);
    })
    // console.log("setItem:", setItems(fetchItems));
    // fetchItems();
    // console.log("what", products);
    // let prod = fetchItems;
    // setItems(prod);


    // currentProduct(items)
    
    // console.log("set",setItems(currentProduct(items)))
  

  return (
    <>
    <h1>Shop Page</h1>
    <div>
        <h1>{items.name}</h1>
        {/* <h4 key={items.sku}>
        <Link to={`/shop/${items.sku}`}>{items.name}</Link>
        </h4> */}
        {/* // <img src={item.image} alt="product image"/> */}

      {/* <img src={items.image} alt=""/> */}
    </div>
    </>
  )};


export default Shop;


// return (
//   <>
//   <h1>Shop Page</h1>
//   <div>
//     {items.map(item => (
      
//       <h4 key={item.sku}>
//       <Link to={`/shop/${item.sku}`}>{item.name}</Link>
//       </h4>
//       // <img src={item.image} alt="product image"/>
//     ))}
//     <img src={items.image} alt=""/>
//   </div>
//   </>
// );
// }