import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/fridge'}>What's in your fridge</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
