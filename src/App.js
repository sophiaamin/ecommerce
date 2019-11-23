import React from 'react';
import './App.css';
import Login from './Routes/Login';
import Signup from './Routes/Signup';
import Nav from './Routes/Nav';
import Shop from './Routes/Shop';
import ProductDetail from './Routes/ProductDetail'
import Orders from './Routes/Orders';
import OrderDetail from './Routes/OrderDetail';
import Cart from './Routes/Cart';
import Checkout from './Routes/Checkout';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Browser Router gives you the ability to handle routing in react
// Route renders out a component based on the URL
// Switch stops the process when it iterates through all the routes. 
//     As soon as it reaches and finds one route that matches the specific URL/path, its only going to render that component 

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ProductDetail} /> 
          <Route path="/orders" exact component={Orders}/>
          <Route path="/orders/orderdetail" component={OrderDetail}/>
          <Route path="/cart" component={Cart}/>  
          <Route path="/checkout" component={Checkout}/>
        </Switch>
      </div>
      <div>
          <Link Redirect to="/login" >
          <h3 className="logout">Logout</h3>
          </Link>
        </div>
    </Router>
    </>
  );
}

const Home = () => (
  <>
    <div>
      <h1>Home Page</h1>
    </div>
    <div className='thishomepage'>
      <img className='hi' src="https://img1.wsimg.com/isteam/stock/11139/:/rs=w:800,h:1000,cg:true,m/cr=w:1600,h:1000,a:cc" alt="welcome"></img>
    </div>
    <div class="rectangle">
      <div class="circle">hi</div>
      <div class="circle">hola</div>
    </div>
  </>
);

export default App;
