import { Button, FormControl, Navbar, NavDropdown, Form, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


function Header(){
    return (
      
  <Row><header className="w-100">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Snooker Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/section/1">Special Offers</NavDropdown.Item>
        <NavDropdown.Item href="/section/2">Snooker Tables</NavDropdown.Item>
        <NavDropdown.Item href="/section/3">Cue cases</NavDropdown.Item>
        <NavDropdown.Item href="/section/4">Cue tips</NavDropdown.Item>
        <NavDropdown.Item href="/section/5">Accessories</NavDropdown.Item>
        <NavDropdown.Item href="/section/6">Snooker cues</NavDropdown.Item>
        <NavDropdown.Item href="/section/7">Pool cues</NavDropdown.Item>
        <NavDropdown.Item href="/section/8">Handmade cues</NavDropdown.Item>
       
    
          
      
                         <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.8">More</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

    
</header></Row>

  
    );
}

export default Header;