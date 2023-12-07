

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src="/icon/SylvIcon.jpg" alt="Sylv Icon" className="icon-image" />
            </Link>
            <div className="navbar-title">CofeeBAR</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/new-page">Pizza</Link>
                <Link to="/weather">Weather</Link> {/* Add the link to the Weather page */}
            </div>
        </nav>
    );
};

export default Navbar;
