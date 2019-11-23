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
        const skuu = match.params.id
        // console.log(skuu)
        // const specific = item.products.filter(sku => sku == skuu);
        // console.log(skuu)
        // console.log(specific)

        setItem(item.products);
        console.log(Object.values(item.products[0]));
        console.log(Object.values(item.products[0]).filter(sku => sku == skuu));
        console.log(item.products[0].image);
        
        // for(let i = 0; i<item.products.length; i++){
        //   setItem(item.products);
        //   console.log(item.products[i]);
        //   console.log(item.products[i].image);
        // }

        // console.log(item.products.keys(sku).indexOf(skuu))
        
        console.log(item.products[0].image);
        // console.log(item.products.indexOf(products.sku[skuu]))

        
      
      });
        // console.log(item.products[0].image)
        // console.log(item.products[0].name)
        // console.log(item.data.item.name)
        // console.log(item.data.item.images.information)
        // } catch(e){
        //   console.log(e)
        // }
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


