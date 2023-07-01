import React from 'react'
import { Col, Container, Row ,Card} from 'react-bootstrap'
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
const Product = () => {
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
        <Card.Text className='text-danger ' >
        {item.price}
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
