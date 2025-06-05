import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx"
import Register from "../Pages/Register.jsx"
import Cart from "../Pages/Cart.jsx"
import Products from "../Pages/Products.jsx"

const Mainroutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register/>}/>
     <Route path='/cart' element={<Cart />}/>
    <Route path='/products' element={<Products/>}/>

   </Routes>
  )
}

export default Mainroutes
