import React, {useState, useEffect} from 'react';
import '../App.css';


// match: access to properties like isExact, params, path, url
function Product({match}) {
  useEffect(() => {
      fetchItem();
      console.log(match)
      console.log(match.params.id)
  },[]); // only run when components mounts

    // state to put the items in
   const [item, setItem] = useState({
    image: ''
   });

   const fetchItem = async() => {
        // const fetchItem = await fetch(`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/${(match.params.id).slice(0,4)}/${match.params.id}_ra.jpg`,
        const fetchItem = fetch('https://api.bestbuy.com/v1/products(search=toaster&search=stainless&search=steel)?format=json&show=sku,name,image,salePrice&apiKey=mznufc3sxam3w2r7pkdbmnu2',  
        )
          .then(response => response.json())
          .then(responseJson => {
            const item = responseJson;
            console.log(responseJson);;
          
        // try {
        // const item = await fetchItem.json();
        // console.log(item);
        // setItem(item.products);
        // console.log(item.products)
        const currentSku = match.params.id
        let itemsArray = item.products;
        console.log("itemsArray", itemsArray);
        console.log("sku", currentSku);
        
        let index = function(currentSku,arr){
          for(var i = 0; i < arr.length; i++) {
            if(arr[i].sku == currentSku) {
              return i;
            }
         }
        }
        var selIndex = index(currentSku, itemsArray);
        setItem(item.products[selIndex]);
      });
    };


  return (
    <>
    <h1>Product Details Page</h1>
    <hr></hr>
    <div> 
        <h1>{item.name}</h1> 
        <img src={item.image} alt=""/>
    </div>
    </>
  );
}

export default Product;


