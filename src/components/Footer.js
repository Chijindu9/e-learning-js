
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Create this file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
            <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            </div>
            <div className="footer-copyright">
            © {new Date().getFullYear()} Edenites Academy. All rights reserved.
            </div>
      </div>
    </footer>
  );
};

export default Footer;