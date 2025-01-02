// src/components/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css'; // Assuming the styles are in a separate file

function Home() {
  const [count, setCount] = useState(0);

  // UseEffect to trigger alert only once when the component is mounted (not on every render)
  useEffect(() => {
    // This effect will run only once, equivalent to componentDidMount
    alert("The two PopUps. Because of the useEffect and the StrictMode of React...");
  }, []);  // Empty dependency array to ensure it runs only once after the first render

  const handleClick = (e) => {
    e.preventDefault(); // Prevent any default form behavior
    setCount(count + 1);  
    if (count === 5) {
        alert("Button Clicked 5 Times!")
    }
  };

  return (
    <div className="home-container">
      <h2>Home Page</h2>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;
