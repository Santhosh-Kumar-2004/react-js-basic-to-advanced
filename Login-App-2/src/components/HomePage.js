import React, { useContext } from 'react';
import { CounterContext } from '../CounterContext';
import Navbar from './NavBar';
import '../styles/HomePage.css'; // Import Home page CSS

function HomePage({ onLogout }) {
  const { counter, increment, decrement, reset, submit } = useContext(CounterContext);

  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar onLogout={onLogout} />

      {/* Counter Section */}
      <div className="counter-section">
        <h1>Home Page Counter: {counter}</h1>
        <div className="counter-buttons">
          <button className="counter-btn1" onClick={increment}>Increment</button>
          <button className="counter-btn1" onClick={decrement}>Decrement</button>
          <button className="counter-btn1" onClick={reset}>Reset</button>
          <button className="counter-btn1" onClick={submit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
