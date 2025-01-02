// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll add some styles here

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>My Logo</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/security">Security</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
