import React from 'react'
import {Card, CardDeck, Col} from 'react-bootstrap'
import categories from '../categories'

function createCategoriesCard(category){

    return (
        
        <Card key={category.id} className="catCard">

      <a href={`section/${category.id}`}>
      <Card.Img  className="responsive" variant="top" overlay="red-light" src={category.src} />
            <Card.Body className="cardBody">
            <Card.Title> {category.name}</Card.Title>
            </Card.Body>   
      </a>
          </Card> 
          )
}

function Categories(){
    return (
<CardDeck className="catContainer">
    <Col className="p-3" lg={12}>
    <CardDeck>
    {categories.slice(0,4).map(createCategoriesCard)}
    </CardDeck>
</Col>
    <Col className="p-3" lg={12}>
    <CardDeck>
   {categories.slice(4,8).map(createCategoriesCard)}
       </CardDeck>
    </Col>
</CardDeck>
    )
}

export default Categories;