import React from 'react'
import {Container, Row} from 'react-bootstrap'
import Categories from './Categories'
import Jambutron from './Jfiller'

function Homepage(){
 
    return <Container fluid>
        <Row>
  <Jambutron/>
        </Row>
        <Row className="justify-content-center">
           <Categories/>
        </Row>
        <Row>
        <Jambutron/>
        </Row>
    </Container>
}

export default Homepage;