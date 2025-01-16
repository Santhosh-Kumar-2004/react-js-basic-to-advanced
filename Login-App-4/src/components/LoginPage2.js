import React, { useState } from "react";
import "../styles/LoginPage2.css"; // Import external CSS file
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function LoginPage2({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(value));
        setEmail(value);
    };

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
                        {/* <input
                            id="email"
                            className="form-input"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        /> */}
                        <input
                            value={email}
                            onChange={(e) => validateEmail(e.target.value)}
                            placeholder="Enter email"
                            style={{
                                borderColor: isValid ? "black" : "red", // Highlights invalid email
                            }}
                            className="login-input"
                        />
                        {!isValid && <small style={{ color: "red" }}>Invalid email address</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        {/* <input
              id="password"
              className="form-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /> */}
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            style={{
                                WebkitTextSecurity: isHidden ? "disc" : "none", // Masks input
                            }}
                            className="login-input"
                        />
                        <button type="button" onClick={toggleVisibility} className="show-hide-button">
                            {isHidden ? "Show" : "Hide"}
                        </button>
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
