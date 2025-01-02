import React from "react";
import Login from "./components/Login"; // Import the Login component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About'; // About page
import Home from './components/Home'; // Home page
// import Security from './components/Security'; // Security page
import NotFound from './components/NotFound'; // Not Found page
import Navbar from "./components/NavBar";
import { Security, SecurityProvider } from './components/Security';

const App = () => {
  // Function to handle form submission
  const handleLoginSubmit = (email, password) => {
    console.log("Submitted Email:", email);
    console.log("Submitted Password:", password);
    alert("Form Submission Succeed...!")
    // Here you can add your logic to handle the login, like sending the data to the server
  };

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <div className="App">

         {/* Replace Switch with Routes */}
        <SecurityProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Update Route syntax to use the element prop */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/security" element={<Security />} />
            {/* Fallback route for non-matching paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SecurityProvider>
        </div>
      </Router>
      <Login
        title="Login to Your Account" // Pass title as a prop
        buttonText="Sign In" // Pass button text as a prop
        onSubmit={handleLoginSubmit} // Pass submit handler as a prop
      />
    </div>
  );
};

export default App;
