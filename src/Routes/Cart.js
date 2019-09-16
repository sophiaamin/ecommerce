import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div>
      <h1>Cart Page</h1>
      <Link to={`/checkout`}>
        <h1>Checkout</h1>
      </Link>
    </div>
  );
}

export default Cart;
