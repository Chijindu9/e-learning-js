// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">Edenites</Link>
      </div>
      
      {/* Search Bar in Header */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="What do you want to learn?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="navbar-links">
        <Link to="/courses">Explore</Link>
        <Link to="/teach">Teach on Edenites</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;