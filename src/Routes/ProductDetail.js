import React, {useState, useEffect} from 'react';
import '../App.css';


// match: access to properties like isExact, params, path, url
function Product({match}) {
  useEffect(() => {
      fetchItem();
      // let abbv = match.params.sku.slice(4,3)
      // console.log(abbv)
      console.log(match)
      console.log(match.params.id)
  },[]); // only run when components mounts

    // state to put the items in
   const [item, setItem] = useState({
    image: []
   });

   const fetchItem = async() => {
        const fetchItem = await fetch(`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/${(match.params.id).slice(0,4)}/${match.params.id}_ra.jpg`,
        {
            
        });
        try {
        const item = await fetchItem.json();
        setItem(item.products);
        console.log(item.products)
        console.log(item.products[0].image)
        console.log(item.products[0].name)
        // console.log(item.data.item.name)
        // console.log(item.data.item.images.information)
        } catch(e){
          console.log(e)
        }
    };


  return (
    <>
    <h1>Product Details Page</h1>
    <div> 
        {/* <h1>{item[0].name}</h1>  */}
        {/* <img src={item.images} alt=""/> */}
    </div>
    </>
  );
}

export default Product;



// import React, {useState, useEffect} from 'react';
// import '../App.css';

// // match: access to properties like isExact, params, path, url
// function Product({match}) {
//   useEffect(() => {
//       fetchItem();
//       console.log(match)
//       console.log(match.params.id)
//   },[]); // only run when components mounts

//     // state to put the items in
//    const [item, setItem] = useState({
//     image: []
//    });
//   //  ${match.params.sku}
//    const fetchItem = async() => {
//         const fetchItem = await fetch(`https://api.bestbuy.com/v1/products(search=toaster&search=stainless&search=steel)?format=json&show=sku,name,image&apiKey=mznufc3sxam3w2r7pkdbmnu2`,
//         {
          
//         });
//         try {
//         const item = await fetchItem.json();
//         setItem(item.products);
//         console.log(item.products)
//         // console.log(item.image)
//         // console.log(item.data.item.name)
//         // console.log(item.data.item.images.information)
//         } catch(e){
//           console.log(e)
//         }
//     };


//   return (
//     <>
//     <h1>Product Details Page</h1>
//     <div> 
//         <h1>{item.name}</h1> 
//         <img src={item.image} alt=""/>
//     </div>
//     </>
//   );
// }

// export default Product;
