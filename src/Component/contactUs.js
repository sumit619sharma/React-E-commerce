import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';

const ContactUs = () => {
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [phone,setPhone] = useState('')
const detailHandler =async (e)=>{
    e.preventDefault();
//console.log("detail",name,email,phone);
const detail = {
    name: name,
    email: email,
    phone: phone,
}
const response = await fetch('https://react-http-2f680-default-rtdb.firebaseio.com/details.json',{
    method: 'POST',
    body: JSON.stringify(detail),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json();
console.log("resp==",data);
}

  return (
    <Container style={{ marginTop: '10%', marginBottom: '10%' }} >
  
      <Card>
        <Card.Body>
          <Card.Title>Details</Card.Title>

          <Form onSubmit={detailHandler} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name"  value={name} onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  value={email} placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" placeholder="Password" value={phone}  onChange={(e)=>{setPhone(e.target.value)}} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>          
        </Card.Body>
      </Card>
    





    </Container>
  )
}

export default ContactUs;
