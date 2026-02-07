import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="logo">lapah.ai</div>
                    <p className="footer-desc">
                        Automating automotive customer service with human-like AI voice assistants.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Integrations</a>
                        <a href="#">Pricing</a>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Lapah AI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
