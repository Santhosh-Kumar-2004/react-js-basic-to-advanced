import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-img.jpg'; // Replace with your own image

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our World</h1>
        <p>Your success journey starts here. Join us to explore endless opportunities.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
