// src/components/About.js
import React, { useState, useEffect, useRef } from 'react';
import './About.css'; // Assuming the styles are in a separate file

function About() {
  const [count, setCount] = useState(0); // State to track button clicks
  const countRef = useRef(0); // Ref to track count without triggering re-renders
  const [showAlert, setShowAlert] = useState(false); // State to toggle alert visibility

  // useEffect to show an alert only when the component is mounted
  useEffect(() => {
    console.log('About Page is mounted!');
    return () => {
      alert('About Page is unmounted!');
    };
  }, []); // Empty dependency array, so this effect runs once when mounted

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    countRef.current = countRef.current + 1; // Update the ref without triggering re-render
    if (countRef.current >= 8) {
      setShowAlert(true); // Show alert when clicked 5 times
    }
  };

  return (
    <div className="about-container">
      <h1>About Page</h1>
      <p>This is the About Page. Here you can add information about your website or project.</p>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click Me</button>
      {showAlert && <div className="alert">You have clicked 8 times!</div>}
    </div>
  );
}

export default About;
