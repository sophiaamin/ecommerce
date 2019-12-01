import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import ProductCard from "../Components/ProductCard";
//  use state: hold the info from api 
// use effect: runs the fetch call when our component mounts

function Shop() {
  useEffect(() => {
    fetchItems();
  },[]); // only run when components mounts

   // state to put the items in
   const [items, setItems] = useState([]);

   // fetch api
  const fetchItems = async () => {
    const data = await fetch('https://api.bestbuy.com/v1/products(search=toaster&search=stainless&search=steel)?format=json&show=sku,name,image,salePrice&apiKey=mznufc3sxam3w2r7pkdbmnu2',
    );

    const items = await data.json();
    console.log(items.products);
     setItems(items.products);
  };

  function productEntry(product){
    return(
      <ProductCard 
        key={product.sku}
        sku={product.sku}
        name={product.name}
        salePrice={product.salePrice}
        image={product.image}
      />
    );
  }

  return (
    <>
    <h1>Shop Page</h1>
    <div>{items.map(productEntry)}</div>
    {/* <div>
      {items.map(item => (
        <h1 key={item.sku}>
        <Link to={`/shop/${item.sku}`}>{item.name}</Link>
        </h1>
        // <img src={item.image} alt="product image"/>
      ))}
    </div> */}
    </>
  );
}

export default Shop;
