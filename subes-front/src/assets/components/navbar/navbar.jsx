import './navbar.css'
import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/share">SHARE A CUBE</NavLink>
            <div></div>
            <NavLink to="/login">LOG IN</NavLink>
        </nav>
    )
}

export default Navbar 