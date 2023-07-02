import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Product from './Component/Product'
import NavBar from './Component/NavBar'
import Cart from './Component/Cart'
import AppProvider from './store/CartProvider'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Switch } from 'react-router';
import About from './Component/About'
import Home from './Component/Home'
import ContactUs from './Component/contactUs'
import ProductDetail from './Component/productDetail'

const App = () => {
const [showCart,setShowCart] = useState(false);

  const toggleCart= ()=>{
   setShowCart(!showCart);
  }
  console.log(showCart);
  return (
    <AppProvider>
 
      <BrowserRouter>
      <NavBar onClick={toggleCart} />
    {showCart && <Cart onClick={toggleCart}  /> }   

<Routes>
 <Route  exact path='/product' element={<Product/>}    />
 <Route  path='/about' element= { <About/> } />
 <Route  path='/home' element={<Home/>}    />
 <Route  path='/contact' element={<ContactUs/>}    />
 <Route  exact path='/product/:productid' element={<ProductDetail/>}    />
</Routes>


    </BrowserRouter>
      
 
    </AppProvider>
  )
}

export default App
