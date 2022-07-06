import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
import GroceryImg from '../Images/grocery.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"
function NavbarTop() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>     
        <NavDropdown title="ALL CATEGORIES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><strong>ELECTRONICS</strong></Nav.Link> 
            <Nav.Link href="#action1"><strong>MEN</strong></Nav.Link> 
            <NavDropdown title="WOMEN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1"><strong>WEARS</strong></Nav.Link> 
            <Nav.Link href="#action1"><strong>HOME</strong></Nav.Link> 
            <Nav.Link href="#action1"><strong>BEAUTY & FRAGRANCE</strong></Nav.Link> 
            <Nav.Link href="#action1"><strong>BABY & TOYS</strong></Nav.Link> 
            <Nav.Link href="#action1"><strong>SPORTS</strong></Nav.Link> 
            <Nav.Link href="#action1"><strong>BESTSELLERS</strong></Nav.Link> 
            <Nav.Link href="#action1"><strong>SELL ON NOON</strong></Nav.Link> 
            <Nav.Link href="#action1"><img src={GroceryImg} alt="icon"/></Nav.Link> 
            
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;