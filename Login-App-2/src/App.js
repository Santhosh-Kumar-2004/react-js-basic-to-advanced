import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CounterProvider } from './CounterContext'; // Import the CounterProvider
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

  const onLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <CounterProvider> {/* Wrap everything inside CounterProvider */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <HomePage onLogout={onLogout} /> : <Navigate to="/login" />}
          />
          <Route
            path="/about"
            element={isLoggedIn ? <AboutPage onLogout={onLogout} /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <LoginPage onLogin={onLogin} />}
          />
        </Routes>
      </Router>
    </CounterProvider>
  );
}

export default App;
