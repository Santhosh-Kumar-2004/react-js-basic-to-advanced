import React, { createContext, useState } from 'react';

// Create the Counter Context
export const CounterContext = createContext();

// Provide the Counter Context to the app
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter > 0 ? counter - 1 : 0);
  const reset = () => setCounter(0);
  const submit = () => alert(`Counter submitted: ${counter}`);

  const resetCounter = () => {
    setCounter(0);
  }

  return (
    <CounterContext.Provider
      value={{ counter, increment, decrement, reset, submit, resetCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};
