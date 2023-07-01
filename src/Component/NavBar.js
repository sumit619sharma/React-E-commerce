import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'

const NavBar = (props) => {
  return (
    <Navbar  fixed='top'   bg="light" className="bg-body-tertiary">
    <Container >
      <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        <Button variant="outline-success"  onClick={props.onClick} >Cart</Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
