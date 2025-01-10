import React, { useContext } from 'react';
import { CounterContext } from '../CounterContext';
import Navbar from './NavBar';
import '../styles/AboutPage.css'; // Import About page CSS

function AboutPage({ onLogout }) {
  const { counter, increment, decrement, reset, submit } = useContext(CounterContext);

  return (
    <div className="about-container">
      {/* Navbar */}
      <Navbar onLogout={onLogout} />

      {/* Counter Section */}
      <div className="counter-section">
        <h1>About Page Counter: {counter}</h1>
        <div className="counter-buttons">
          <button className="counter-btn" onClick={increment}>Increment</button>
          <button className="counter-btn" onClick={decrement}>Decrement</button>
          <button className="counter-btn" onClick={reset}>Reset</button>
          <button className="counter-btn" onClick={submit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
