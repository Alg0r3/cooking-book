import React from 'react';
import { Link } from 'react-router-dom';
import { faAngleDoubleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <a href="#" className="nav-link">    
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                        <span className="link-text logo-text">Cooking Book</span>
                    </a>
                </li>
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">
                        <FontAwesomeIcon icon={faHome} />
                        <span className="link-text">Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/fridge'} className="nav-link">
                        <FontAwesomeIcon icon={faUtensils} />
                        <span className="link-text">Fridge</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
