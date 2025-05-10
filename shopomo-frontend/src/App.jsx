import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import PlaceOrder from './Pages/PlaceOrder';
import Order from './Pages/Order';
import Product from './Pages/Product';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>
    </div>
  )
};

export default App