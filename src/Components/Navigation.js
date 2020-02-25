import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../Images/logo.png';
import '../Css/Page.css';
import '../Css/Navigation.css';

export const Navigation = () => {
    return (
        <div className='navv'>
            <h1>Election Commission of India</h1>
            <img src={logo} alt='page' className='logo' />
            <Nav.Link href="/page" className='navlink' >Home</Nav.Link>
            <Nav.Link href="/election" className='navlink' >Election</Nav.Link>
            <Nav.Link href="/register" className='navlink' >Sign up</Nav.Link>
            <Nav.Link href="/login" className='navlink' >Log in</Nav.Link>
            <Nav.Link href="#features" className='navlink' >Results</Nav.Link>
            <Nav.Link href="/about" className='navlink' >About</Nav.Link>
            <Nav.Link href="/contact" className='navlink'>Contact Us</Nav.Link>
        </div>
    )
}