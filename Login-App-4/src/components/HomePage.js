import React, { useContext, useState } from 'react';
import { CounterContext } from '../CounterContext';
import Navbar from './NavBar';
import '../styles/HomePage.css'; // Import Home page CSS

function HomePage({ onLogout }) {
  const { counter, increment, decrement, submit, resetCounter } = useContext(CounterContext);
  const [inputValue, setInputValue] = useState(counter); // Local state to sync input field

  // Update the input field whenever the counter changes
  React.useEffect(() => {
    setInputValue(counter);
  }, [counter]);

  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar onLogout={onLogout} />

      {/* Counter Section */}
      <div className="counter-section">
        <h1>Home Page Counter</h1>

        {/* Input field to display and edit counter value */}
        <input
          type="number"
          className="counter-input"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />

        <div className="counter-buttons">
          <button className="counter-btn1" onClick={increment}>Increment</button>
          <button className="counter-btn1" onClick={decrement}>Decrement</button>
          <button className="counter-btn1" onClick={resetCounter}>Reset</button>
          <button
              className="counter-btn1"
              onClick={() => {
              submit();
              setInputValue(counter); // Sync input field after submit
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
