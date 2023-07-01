import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Product from './Component/Product'
import NavBar from './Component/NavBar'
import Cart from './Component/Cart'
import AppProvider from './store/CartProvider'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './Component/About'
import Home from './Component/Home'

const App = () => {
const [showCart,setShowCart] = useState(false);

  const toggleCart= ()=>{
   setShowCart(!showCart);
  }
  console.log(showCart);
  return (
    <AppProvider>
    <Container style={{ position: "relative" }} >
    
    
    <BrowserRouter>
    <NavBar onClick={toggleCart} />
    {showCart && <Cart onClick={toggleCart}  /> }
<Routes>
  <Route  path='/product' element={<Product/>}    />
 <Route  path='/about' element= { <About/> } />
 <Route  path='/home' element={<Home/>}    />
</Routes>

    </BrowserRouter>
      
    </Container>
    </AppProvider>
  )
}

export default App
