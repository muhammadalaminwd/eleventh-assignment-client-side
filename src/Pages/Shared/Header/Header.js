import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
        <Navbar bg="success" variant="dark">
        <Container>
        <Navbar.Brand href="#home">FRESH WAREHOUSE</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Items</Nav.Link>
          <Nav.Link href="#pricing">Blogs</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;