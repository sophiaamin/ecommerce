import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Orders() {
  return (
    <>
    <div>
      <h1>Orders Page</h1>
      <Link to={`/orders/orderdetail`}>
        <h1>Order Detail</h1>
      </Link>
    </div>
    </>
  );
}

export default Orders;
