import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <>
    <div>
      <h1>Checkout Page</h1>
      <Link Redirect to={`/orders/orderdetail`}>
        <h1>Place Order</h1>
      </Link>
    </div>
    </>
  );
}

export default Checkout;
