import React, {useState, useEffect} from 'react';
import '../App.css';

// match: access to properties like isExact, params, path, url
function Product({match}) {
  useEffect(() => {
      fetchItem();
      console.log(match)
  },[]); // only run when components mounts

    // state to put the items in
   const [item, setItem] = useState({
    images: {}
   });

   const fetchItem = async() => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`,
        {
            headers: {
                Authorization: '2cdaa82c8d220b4c49f74cd6550fdabf'
            },
        });
        try {
        const item = await fetchItem.json();
        setItem(item.data.item);
        console.log(item.data)
        console.log(item.data.item.name)
        console.log(item.data.item.images.information)
        } catch(e){
          console.log(e)
        }
    };


  return (
    <>
    <h1>Product Details Page</h1>
    <div> 
        <h1>{item.name}</h1> 
        <img src={item.images.icon} alt=""/>
    </div>
    </>
  );
}

export default Product;
