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
              <Nav.Link as={Link} to="/" className='text-light ms-lg-5'>Home</Nav.Link>
              <Nav.Link as={Link} to="/inventories" className='text-light'>Inventory</Nav.Link>
              <Nav.Link as={Link} to="/blogs" className='text-light'>Blogs</Nav.Link>
            </Nav>
            <Form className="d-flex">
            {
              user ?
              <Nav.Link as={Link} to="/manageinventories" className='text-light'>Manage Inventories</Nav.Link>
              :
              <Nav.Link as={Link} to="/manageinventories" className='text-light'></Nav.Link>
            }
            {
              user ?
              <Nav.Link as={Link} to="/additem" className='text-light'>Add Item</Nav.Link>
              :
              <Nav.Link as={Link} to="/additem" className='text-light'></Nav.Link>
            }
            {
              user ?
              <Nav.Link as={Link} to="/myitem" className='text-light'>My Item</Nav.Link>
              :
              <Nav.Link as={Link} to="/myitem" className='text-light'></Nav.Link>
            }
            {
              user ?
              <Button variant="outline-success" className='bg-white text-success' onClick={handleSignOut}>Sign Out</Button>
              :
              <Nav.Link className="text-success bg-white m-2 rounded-3" as={Link} to="login">
              LOGIN
            </Nav.Link>
            }
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;