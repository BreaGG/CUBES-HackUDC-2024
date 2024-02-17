import './navbar.css'
import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/share">SHARE A CUBE</NavLink>
            <div></div>
            <a href="">USER</a>
        </nav>
    )
}

export default Navbar 