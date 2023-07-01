import React, { useContext } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import CartContext from '../store/cart-context'
// const cartElements = [

//     {
    
//     title: 'Colors',
    
//     price: 100,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
//     quantity: 2,
    
//     },
    
//     {
    
//     title: 'Black and white Colors',
    
//     price: 50,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
//     quantity: 3,
    
//     },
    
//     {
    
//     title: 'Yellow and Black Colors',
    
//     price: 70,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
//     quantity: 1,
    
//     }
    
//     ]
    
    
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartArr =  Object.keys( cartCtx.item);
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
      { cartArr.map((key)=> {
        const item = cartCtx.item[key]
        return (
            <tr key={key}>
          
          <td> <img src={item.imageUrl} width={100} /> {item.title}  </td>
          <td>{item.price}</td>
          
          <td>{cartCtx.quantity[key]} <Button variant='danger' >Remove</Button> </td>
        </tr>
        )
      }) }
        
      </tbody>
    </Table>
                
            
        
      </Modal.Body>

      <Modal.Footer>
      <div className="container" style={{display:'flex',justifyContent: 'space-between'}}>
        <span>Total Amount</span>
        <span>  ${cartCtx.totalAmount}</span>
      
        <Button variant="secondary" onClick={props.onClick} >Close</Button>
        </div>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default Cart
