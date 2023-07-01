import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Product from './Component/Product'
import NavBar from './Component/NavBar'
import Cart from './Component/Cart'
import AppProvider from './store/CartProvider'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './Component/About'

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
  <Route  path='/' element={<Product/>}    />
 <Route  path='/about' element= { <About/> } />
</Routes>

    </BrowserRouter>
      
    </Container>
    </AppProvider>
  )
}

export default App
