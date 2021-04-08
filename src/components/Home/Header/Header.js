import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
  return (
   
    
          <Navbar bg="light" expand="lg">
            <Navbar.Brand className="header-color">Super Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Link className="nav-link text-secondary" to="/home">Home</Link>
                <Link className="nav-link text-secondary" to="/order">Order</Link>
                <Link className="nav-link text-secondary" to="/admin">Admin</Link>
                <Link className="nav-link text-secondary" to="/login">Login</Link>
            </Navbar.Collapse>
          </Navbar>
              
   
   
    
    
  );
};

export default Header;