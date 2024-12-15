import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/vampire.jpg';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" />
        </NavLink>
      </div>

      {/* Hamburger icon to toggle mobile menu */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Navigation links, conditionally rendered based on mobile menu state */}
      <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Home</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Contact</NavLink>

        {/* Dropdown Menu for Features */}
        <div className="dropdown">
          <NavLink to="/features" className="nav-item dropdown-toggle">Features</NavLink>
          <div className="dropdown-menu">
            <NavLink to="/features/feature1" className="dropdown-item">Feature 1</NavLink>
            <NavLink to="/features/feature2" className="dropdown-item">Feature 2</NavLink>
            <NavLink to="/features/feature3" className="dropdown-item">Feature 3</NavLink>
          </div>
        </div>

        <NavLink to="/services" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Services</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
