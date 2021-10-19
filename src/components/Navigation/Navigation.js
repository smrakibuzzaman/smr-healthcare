import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BG from './../../images/banner/bg.png'

const Navigation = () => {
    return (
        <div >
        
            <Navbar  style={{background: `url(${BG})`}} sticky="top" bg="dark" variant="dark">
            
    <Container>
    
    <Navbar.Brand href="#home">SMR Health Care</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
      <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
      <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
      <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
      <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Navigation;