import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CounterProvider } from './CounterContext'; // Import the CounterProvider
import LoginPage from './components/LoginPage';
import LoginPage2 from './components/LoginPage2';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

  // Update isLoggedIn state whenever localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const loginStatus = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
      setIsLoggedIn(loginStatus);
    };

    // Listen for changes to localStorage
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange); //This is important because if we didn’t remove the listener, it could still be listening for changes even after the component is gone, leading to unnecessary performance overhead.
    };
  }, []);

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
            element={isLoggedIn ? <Navigate to="/" /> : <LoginPage2 onLogin={onLogin} />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/login" /> : <LoginPage onLogin={onLogin} />}
          />
        </Routes>
      </Router>
    </CounterProvider>
  );
}

export default App;
