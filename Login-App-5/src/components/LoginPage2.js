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

    // Method 1: Using the Regex test method
    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //This regex checks for a valid email address
        setIsValid(emailRegex.test(value)); //The test method checks if the email is valid
        setEmail(value); //This line updates the email state
    };

    // Method 2: Using the indexOf method
    const basicEmailValidation = (value) => {
        const atIndex = value.indexOf('@');
        const dotIndex = value.lastIndexOf('.');
        const isValidEmail = (
            atIndex > 0 && // '@' is not at the beginning
            dotIndex > atIndex + 1 && // '.' is after '@'
            dotIndex < value.length - 1 // '.' is not at the end
        );
        setIsValid(isValidEmail); // Update validation state
        setEmail(value); // Update email state
    };

    // Method 3: Using the split method
    const validateEmailBySplitting = (value) => {
        const parts = value.split('@');
        const isValidEmail =
            parts.length === 2 && // Must have exactly one '@'
            parts[0] && // Local part must exist
            parts[1] && // Domain part must exist
            parts[1].includes('.'); // Domain must have a '.'
        setIsValid(isValidEmail); // Update validation state
        setEmail(value); // Update email state
    };

    // Method 4: Using the browser's built-in validation
    const validateEmailWithBrowserAPI = (value) => {
        const input = document.createElement('input');
        input.type = 'email'; // Temporarily use email type for validation
        input.value = value;
        const isValidEmail = input.checkValidity(); // Returns true if valid
        setIsValid(isValidEmail); // Update validation state
        setEmail(value); // Update email state
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Default credentials
        const defaultEmail = "user@example.com";
        const defaultPassword = "password123";

        if (email === defaultEmail && password === defaultPassword) {
            onLogin();
        } else {
            alert("Invalid email or password!");
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
                            value={email}
                            onChange={(e) => basicEmailValidation(e.target.value)} // Change the function name here
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
                        Don't have an account?{" "}
                        <Link to="/signup" onClick={handleSignUp} className="signup-link">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage2;
