import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../../../images/images/logo.png";
import auth from "../../../firebase.init";
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
    return (
        <Navbar bg="success" expand="lg">
        <Container fluid>
        <Navbar.Brand className='ms-5' as={Link} to="/">
        <img src={logo} alt="" height={90}/>
        </Navbar.Brand>
          <Navbar.Brand as={Link} to="/" className='text-light fs-3'>FRESH WAREHOUSE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
            >
              <Nav.Link href="#home" className='text-light ms-lg-5'>Home</Nav.Link>
              <Nav.Link href="home#inventory" className='text-light'>Inventory</Nav.Link>
              <Nav.Link as={Link} to="/blog" className='text-light'>Blog</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success" className='text-light' onClick={handleSignOut}>Sign Out</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;