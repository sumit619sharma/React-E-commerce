import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

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

const ProductDetail = () => {
    const params = useParams()
    console.log(params);
    const item = productsArr[params.productid-1];
    console.log("details==",item);
  return (
    <Container style={{marginTop: '10%'}} >
    <div style={{color: 'red'}}>
    <Card>
    <Card.Img variant="top" src={item.imageUrl} width={100} height={200} /> 
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className='text-danger ' style={{display:'flex' , justifyContent: 'space-between'}} >
        {item.price}    
        </Card.Text>
        
        
      </Card.Body>
    </Card>
    </div>
   
    </Container>
  )
}

export default ProductDetail
