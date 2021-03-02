import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ProductThumb(props){

    return (
        <Card key={props.id}>
  <Link to={`/product/${props.id}`}><Card.Img variant="top" src={props.src} /></Link>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
  </Card.Body>
</Card>

    )
}
export default ProductThumb;