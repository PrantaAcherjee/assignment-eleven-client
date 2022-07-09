import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
    const { user, logOut } = UseAuth();
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-sec">
        <Container>
        <Navbar.Brand>
        <Link to="/" className='text-decoration-none'>
        <div className='logo'><span className='mini-logo'>TF</span> Travels Freak</div>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
        </Nav>
        <Nav className='headers'>
        <NavLink to="/home">Home</NavLink>
        {user.email &&
        <Link to="/addservice">Add service</Link>
        }
         {
         user.email &&
         <Link to="/manageservice"> Manage service</Link>
         }
        <NavLink to="/about">About</NavLink>
        <NavLink to="faq">Question</NavLink>
        {
         user?.email?
         <NavLink to="" onClick={logOut}>Sign out</  NavLink>
        :
        <NavLink to="/login">Sign in</NavLink> 
         }
        </Nav>
        </Navbar.Collapse>
         </Container>
        </Navbar>
     
        </div>
         
        
        
    );
};

export default Header;