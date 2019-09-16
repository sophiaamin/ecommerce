import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import ReactSearchBox from 'react-search-box';


function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none',
    };

  return (
      
   <nav>
       <>
       <Link to='/'>
            <h3>Logo</h3>
       </Link>
       <input
          placeholder="Search for..."
        />
       <ul className="nav-links">
           <Link style={navStyle} to='/shop'>
                <li>Shop</li>
           </Link>
           <Link style={navStyle} to='orders'>
                <li>Orders</li>
           </Link>
           <Link style={navStyle} to='/cart'>
                <li>Cart</li>
           </Link>
       </ul>
       </>
   </nav>
  );
}

export default Nav;
