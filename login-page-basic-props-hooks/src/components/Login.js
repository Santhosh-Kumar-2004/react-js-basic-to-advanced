import React, { useState } from "react";
import "./Login.css";

const Login = ({ title, buttonText, onSubmit }) => {
  // States to manage email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass email and password to the parent component via onSubmit prop
    onSubmit(email, password);
  };

  return (
    <>
    <div className="login-cont">
      <div className="login-container">
        <h2>{title}</h2> {/* Display title passed from parent */}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="labels">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="labels">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{buttonText}</button> {/* Display button text passed from parent */}
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
