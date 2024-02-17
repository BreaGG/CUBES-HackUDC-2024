import './navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../usercontext/userContext';

function Navbar() {
    const { username } = useUser();

    return (
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/share">SHARE A CUBE</NavLink>
            <div></div>
            <div>{username ? `${username}` : <NavLink to="/login">LOG IN</NavLink>}</div>
        </nav>
    );
}

export default Navbar;
