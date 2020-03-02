import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png';
import '../Css/Page.css';
import '../Css/Navigation.css';

export const Navigation = () => {
    return (
        <div className='navv'>
            <h1>Election Commission of India</h1>
            <img src={logo} alt='page' className='logo' />
            <NavLink to="/" className='navlink' >Home</NavLink>
            <NavLink to="/election" className='navlink' >Election</NavLink>
            <NavLink to="/register" className='navlink' >Sign up</NavLink>
            <NavLink to="/login" className='navlink' >Log in</NavLink>
            <NavLink to="#features" className='navlink' >Results</NavLink>
            <NavLink to="/about" className='navlink' >About</NavLink>
            <NavLink to="/contact" className='navlink'>Contact Us</NavLink>
        </div>
    )
}