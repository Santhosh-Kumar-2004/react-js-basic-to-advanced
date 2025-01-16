import React, { createContext, useState } from 'react';

// Create the Counter Context
export const CounterContext = createContext();

// Provide the Counter Context to the app
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0); // Current counter value
  const [defaultCounter, setDefaultCounter] = useState(counter); // Default counter value set by Home page

  // Increment counter
  const increment = () => setCounter(counter + 1);
  const incrementAbout = () => setDefaultCounter(defaultCounter + 1);

  // Decrement counter
  const decrement = () => setCounter(counter > 0 ? counter - 1 : 0);
  const decrementAbout = () => setDefaultCounter(defaultCounter > 0 ? defaultCounter - 1 : 0);

  // Reset counter to the defaultCounter value
  const reset = () => setCounter(defaultCounter);
  const resetAbout = () => setDefaultCounter(counter);

  // Submit the current counter as the new default value
  const submit = () => {
    setDefaultCounter(counter);
    alert(`Counter submitted as default: ${counter}`);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <CounterContext.Provider
      value={{ counter, defaultCounter, increment, decrement, reset, submit, resetCounter, incrementAbout, decrementAbout, resetAbout }}
    >
      {children}
    </CounterContext.Provider>
  );
};
