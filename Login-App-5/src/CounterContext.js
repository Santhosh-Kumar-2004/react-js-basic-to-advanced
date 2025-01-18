import React, { createContext, useState } from 'react';

// Create the Counter Context
export const CounterContext = createContext();

// Provide the Counter Context to the app
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0); // Current counter value
  const [defaultCounter, setDefaultCounter] = useState(counter); // Default counter value set by Home page

  // Increment counter
  const increment = () => setCounter(counter + 1);
  
  // Decrement counter
  const decrement = () => setCounter(counter > 0 ? counter - 1 : 0);
  
  // Reset counter to the defaultCounter value
  const reset = () => setCounter(defaultCounter);
  
  // Submit the current counter as the new default value
  const submit = () => {
    setDefaultCounter(counter);
    // alert(`Counter submitted as default: ${counter}`);
  };
  // const submit = (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior
  //   const currentInputValue = e.target.previousElementSibling.counter; // Access the current input value
  //   setDefaultCounter(Number(currentInputValue)); // Update the default counter value
  //   setDefaultCounter(counter); // Update the default counter value
  //   alert(`Counter submitted as default: ${counter}`); // Show an alert with the new default value
  // };
  
  const resetCounter = () => {
    setCounter(0);
    // setDefaultCounter(0);
  };

  const resetDafaultCounter = () => {
    setDefaultCounter(0);
    defaultCounter = 0;
  };

  return (
    <CounterContext.Provider
      value={{ counter, defaultCounter, increment, decrement, reset, submit, resetCounter, setCounter, setDefaultCounter, resetDafaultCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};
