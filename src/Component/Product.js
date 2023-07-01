import React, { useContext } from 'react'
import { Col, Container, Row ,Card, Button} from 'react-bootstrap'
import CartContext from '../store/cart-context'
const productsArr = [

    {
    id: 1,
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
        id: 2,
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
        id: 3,
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
        id: 4,
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
const Product = () => {
  const crtCtx = useContext(CartContext);
    const addToCart = (item) => {
   
    crtCtx.addItem(item);
    }

  return (
    <Container>
        <Row>
        {
            productsArr.map((item)=>{
                return (
                    <Col xs={6} className='my-10 mx-10'   >
                    <Card style={{ width: '18rem' , margin: "7px" }}>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className='text-danger ' style={{display:'flex' , justifyContent: 'space-between'}} >
        {item.price} <Button variant='primary' onClick={()=>{addToCart(item)}} >Add to Cart</Button>
        </Card.Text>
        
        
      </Card.Body>
    </Card>

                    </Col>
                )
            })
        }
        </Row>
    </Container>
  )
}

export default Product
