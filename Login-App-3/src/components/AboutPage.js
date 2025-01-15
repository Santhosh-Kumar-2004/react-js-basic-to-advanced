import React, { useContext } from 'react';
import { CounterContext } from '../CounterContext';
import Navbar from './NavBar';
import '../styles/AboutPage.css'; // Import About page CSS

function AboutPage({ onLogout }) {
  const { defaultCounter, incrementAbout, decrementAbout, resetAbout } = useContext(CounterContext);

  return (
    <div className="about-container">
      {/* Navbar */}
      <Navbar onLogout={onLogout} />

      {/* Counter Section */}
      <div className="counter-section">
        <h1>About Page Counter: {defaultCounter}</h1>
        <div className="counter-buttons">
          <button className="counter-btn" onClick={incrementAbout}>Increment</button>
          <button className="counter-btn" onClick={decrementAbout}>Decrement</button>
          <button className="counter-btn" onClick={resetAbout}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
