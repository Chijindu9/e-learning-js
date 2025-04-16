import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Edenites</Link>
      <div className="nav-links">
            <Link to="/courses">Courses</Link>
            <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

