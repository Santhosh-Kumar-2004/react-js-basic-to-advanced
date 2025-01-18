import React, { useContext } from 'react';
import { CounterContext } from '../CounterContext';
import Navbar from './NavBar';
import '../styles/AboutPage.css'; // Import About page CSS

function AboutPage({ onLogout }) {
  // const Munna = {...useContext(CounterContext)};
  const { defaultCounter, setDefaultCounter, counter} = useContext(CounterContext);
  // const { defaultCounter, setDefaultCounter} = Munna;

  const incrementAbout = () => setDefaultCounter(defaultCounter + 1);
  const decrementAbout = () => setDefaultCounter(defaultCounter > 0 ? defaultCounter - 1 : 0);
  const resetAbout = () => setDefaultCounter(counter);

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
