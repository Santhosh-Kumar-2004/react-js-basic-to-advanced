import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CounterContext } from '../CounterContext';
import '../styles/NavBar.css'; // Import Navbar CSS

function Navbar({ onLogout }) {
  const { resetCounter, resetDefaultCounter } = useContext(CounterContext);

  // Handle logout and reset counter
  const handleLogout = () => {
    resetCounter();
    resetDefaultCounter();
    onLogout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">MyLogo</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
