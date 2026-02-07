import React from 'react';
import './Navbar.css';
import Button from '../ui/Button';

import Logo from '../ui/Logo';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Logo className="navbar-logo-img" />
                </div>

                <div className="nav-links">
                    <a href="#how-it-works" className="nav-link interactive">How It Works</a>
                    <a href="#use-cases" className="nav-link interactive">Use Cases</a>
                    <a href="#benefits" className="nav-link interactive">Benefits</a>
                </div>

                <div className="nav-cta">
                    <Button variant="secondary" size="sm" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>Log In</Button>
                    <Button variant="primary" size="sm" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>Get Demo</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
