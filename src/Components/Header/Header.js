import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Header.css"

const Header = (

) => {
    const { user, logOut } = UseAuth();
    return (
        <div className="row ">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><h2 className="logo">TRAVELS FREAK</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
        </Nav>
        <Nav className='headers'>
        <NavLink to="/home">Home</NavLink>
        {user.email &&
                 <Link to="/addservice">Add Service</Link>
             }
         {
                 user.email &&
                 <Link to="/manageuser"> Manage User</Link>
             }

        <NavLink to="/about">About Us</NavLink>
        <NavLink to="faq">FAQ</NavLink>
        {
         user?.email?
         <NavLink to="" onClick={logOut}>Log Out</  NavLink>
        :
        <NavLink to="/login">Log in</NavLink> 
         }
        </Nav>
        </Navbar.Collapse>
         </Container>
        </Navbar>
     
        </div>
         
        
        
    );
};

export default Header;