import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
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
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get',
    {
      headers: {
          Authorization: '2cdaa82c8d220b4c49f74cd6550fdabf'
      },
    }
    );

    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  return (
    <>
    <h1>Shop Page</h1>
    <div>
      {items.map(item => (
        <h1 key={item.itemId}>
        <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
    </>
  );
}

export default Shop;
