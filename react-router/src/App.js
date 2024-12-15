import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero /> {/* The Hero section is placed right below the Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
