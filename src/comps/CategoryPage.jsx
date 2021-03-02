import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Items from './ProductList'

function CategoryPage(){
    return (
    <Container>
<Row>
<Col lg={6} >
<h2>Category Name</h2>
<p>Category description</p>
</Col>

<Col lg={6}>
    <img src="https://s.alicdn.com/@sc01/kf/H2d0b65648602482281547ac563d3985eC.jpg_300x300.jpg" alt="catBanner"/>
</Col>
</Row>
<Row>
<Col lg={12} className="p-3"><Items/></Col>
<Col lg={12} className="p-3"><Items/></Col>
<Col lg={12} className="p-3"><Items/></Col>
<Col lg={12} className="p-3"><Items/></Col>
<Col lg={12} className="p-3"><Items/></Col>


</Row>

    </Container>
    )
}
 
export default CategoryPage;