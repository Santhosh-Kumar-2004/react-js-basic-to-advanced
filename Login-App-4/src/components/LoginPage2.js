import React, { useState } from "react";
import "../styles/LoginPage2.css"; // Import external CSS file
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function LoginPage2({ onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Default credentials
    const defaultEmail = 'user@example.com';
    const defaultPassword = 'password123';

    if (email === defaultEmail && password === defaultPassword) {
      onLogin();
    } else {
      alert('Invalid email or password!');
    }
  };

  const handleSignUp = () => {
    return <Navigate to="/signup" />;
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              className="form-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              className="form-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-footer">
          <p>
            Don't have an account? <Link to="/signup" onClick={handleSignUp} className="signup-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage2;
