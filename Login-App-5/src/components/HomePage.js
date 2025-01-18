import React, { useContext, useState } from 'react';
import { CounterContext } from '../CounterContext';
import Navbar from './NavBar';
import '../styles/HomePage.css'; // Import Home page CSS

function HomePage({ onLogout }) {
  const { counter, increment, decrement, resetCounter, setCounter, setDefaultCounter } = useContext(CounterContext);
  const [inputValue, setInputValue] = useState(counter); // Local state to sync input field

  // Update the input field whenever the counter changes
  React.useEffect(() => {
    setInputValue(counter);
  }, [counter]);

  // Submit function using the inputValue state
  const handleSubmit = () => {
    // Store the current input value in a variable
    const currentInputValue = inputValue;

    // Update the global counter value using the local input value
    setCounter(currentInputValue); //This line updates the counter value

    setDefaultCounter(currentInputValue); //This line updates the default counter value

    // Log or alert the value if needed
    // console.log("Submitted value:", currentInputValue); // For testing
    alert(`Counter submitted as default: ${currentInputValue}`); // For alert
  };

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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
