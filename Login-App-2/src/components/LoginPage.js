import React, { useState } from 'react';
import '../styles/LoginPage.css';  // Import the CSS file

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <div id="login-container">
      <div id="login-form">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="login-label" htmlFor="email">Email:</label>
            <input
              id="email"
              className="login-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="login-label" htmlFor="password">Password:</label>
            <input
              id="password"
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button id="login-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
