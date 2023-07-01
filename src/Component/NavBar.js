import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import CartContext from '../store/cart-context'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    const cartCtx = useContext(CartContext);
    const qty =  Object.keys(cartCtx.quantity).length || 0;
  return (
    <Navbar  fixed='top'   bg="light" className="bg-body-tertiary">
    <Container >
      <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
      <NavLink to="/Home" 
        style={{ padding: "10px" }}
       > Home</NavLink>
      
      <NavLink to="/product" 
        style={{ padding: "10px" }}
        activeClassName="active-link">Product</NavLink>
      <NavLink to="/about" 
        style={{ padding: "10px" }}
        activeStyle={{ color: "red", fontWeight: "bold" }}>About</NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        <Button variant="outline-success"  onClick={props.onClick} >Cart {qty>0? qty:''}</Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
