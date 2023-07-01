import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Product from './Component/Product'
import NavBar from './Component/NavBar'
import Cart from './Component/Cart'

const App = () => {
const [showCart,setShowCart] = useState(false);

  const toggleCart= ()=>{
   setShowCart(!showCart);
  }
  console.log(showCart);
  return (
    <Container style={{ position: "relative" }} >
    <NavBar onClick={toggleCart} />
    {showCart && <Cart onClick={toggleCart}  /> }
      <Product/>
    </Container>
  )
}

export default App
