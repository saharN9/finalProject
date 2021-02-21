import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage'
import About from './About'
import Cart from './Cart'
import Login from './Login'
import Register from './Register'
import Blog from './Blog'
import ProductPage from './ProductPage'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';

function Main(){

    return (
  <Container fluid>
    <section className="sticky-top"><Header/></section> 
<Router>
<Switch>
  <Route path="/" exact component={Homepage} />
  <Route path="/about" exact component={About} />
  <Route path="/login" exact component={Login} />
  <Route path="/register" exact component={Register} />
  <Route path="/blog" exact component={Blog} />
  <Route path="/cart" exact component={Cart} />
  <Route path="/productpage" exact component={ProductPage} />

  
</Switch>
</Router>

        <Row className="footer"><Footer/></Row>
       </Container>
    )

}
export default Main;