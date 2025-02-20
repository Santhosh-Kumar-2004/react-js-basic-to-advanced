import React, { useState } from "react";
import "../styles/LoginForm.css"; // Import styles
import { encryptPassword } from "../utils/encryptPassword";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [loading, setLoading] = useState(false); // Loading state
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login & Register

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const encryptedPassword = encryptPassword(password);
    console.log("Encrypted Password:", encryptedPassword);

    const endpoint = isRegister
      ? "http://127.0.0.1:8000/register/"
      : "http://127.0.0.1:8000/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: encryptedPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(isRegister ? "✅ Registered successfully!" : "✅ Welcome back!");
      } else {
        setSuccessMessage(`❌ Error: ${data.detail}`);
      }
    } catch (error) {
      setSuccessMessage("❌ Network error, please try again.");
    }

    setEmail("");
    setPassword("");
    setLoading(false);

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">{isRegister ? "Register" : "Login"}</h2>

      {/* Toggle Button */}
      <button className="toggle-button" onClick={() => setIsRegister(!isRegister)}>
        Switch to {isRegister ? "Login" : "Register"}
      </button>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">Email:</label>
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Password:</label>
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Submitting..." : isRegister ? "Register" : "Login"}
        </button>
      </form>

      {/* Success Message */}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default LoginForm;
