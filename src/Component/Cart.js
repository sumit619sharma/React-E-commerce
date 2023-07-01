import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    
const Cart = (props) => {
  return (
    <div
    className="modal show"
    style={{ display: 'block', position: 'fixed' ,zIndex: 999 }}
  >
    <Modal.Dialog   aria-labelledby="contained-modal-title-vcenter"
      centered
>
      <Modal.Header >
        <Modal.Title>Cart-Items</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      
        
            
                    <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>ITEM</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
        </tr>
      </thead>
      <tbody>
      { cartElements.map((item)=> {
        return (
            <tr>
          
          <td> <img src={item.imageUrl} width={100} /> {item.title}  </td>
          <td>{item.price}</td>
          
          <td>{item.quantity} <Button variant='danger' >Remove</Button> </td>
        </tr>
        )
      }) }
        
      </tbody>
    </Table>
                
            
        
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClick} >Close</Button>
      
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default Cart
