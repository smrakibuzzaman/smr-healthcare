import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase-init';
import useAuth from '../hooks/useAuth';
import BG from './../../images/banner/bg.png'
import { HashLink } from 'react-router-hash-link';
initializeAuthentication();
const Navigation = () => {
  const {user, logOut} = useAuth();
  console.log(user);
    return (
        <div >
        
            <Navbar  style={{background: `url(${BG})`}} sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
            
    <Container>
    
    <Navbar.Brand href="#home">SMR Health Care</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
      <Nav.Link as={NavLink} to="/details">Details</Nav.Link>
      <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
     {user.email ? <Button onClick={logOut} variant="light">Logout</Button> : 
     <Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
      <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">{user.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Navigation;