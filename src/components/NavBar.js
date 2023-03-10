import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import CartModal from './CartModal';

const NavBar = () => {
  const [showCart, setShowCart] = useState(false)
  const showCartHandler = () => setShowCart(true)
 const handleClose = () => setShowCart(false)
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
        <h1 style={{color:"white"}}>The Generic Store</h1>
    <Nav  activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Store</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Contact</Nav.Link>
        </Nav.Item>
        
        
      </Nav>
      
      <Button variant="light" className="ml-3" onClick={showCartHandler}>Cart</Button>
      </Container>
      
      
      </Navbar>
      {showCart && <CartModal showCart={showCart}
      handleClose={handleClose}/>}
      </>
  );
}

export default NavBar