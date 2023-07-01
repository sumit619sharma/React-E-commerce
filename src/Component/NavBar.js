import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import CartContext from '../store/cart-context'

const NavBar = (props) => {
    const cartCtx = useContext(CartContext);
    const qty =  Object.keys(cartCtx.quantity).length || 0;
  return (
    <Navbar  fixed='top'   bg="light" className="bg-body-tertiary">
    <Container >
      <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
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
