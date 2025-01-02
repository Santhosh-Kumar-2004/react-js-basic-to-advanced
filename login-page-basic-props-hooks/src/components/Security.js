import React, { useState, useEffect, useContext, useReducer } from 'react';
import "./Security.css"

// Create a Context for managing security settings
const SecurityContext = React.createContext();

const securityReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SECURITY':
      return { ...state, isSecurityEnabled: !state.isSecurityEnabled };
    default:
      return state;
  }
};

const initialSecurityState = {
  isSecurityEnabled: true,
};

function Security() {
  // State Hook for the component itself
  const [username, setUsername] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  // Using useEffect Hook for side effects (fetch data, update on mount)
  useEffect(() => {
    document.title = `Security Page | ${username ? username : 'Guest'}`;
  }, [username]);

  // Using useContext Hook to get current security settings
  const { isSecurityEnabled, dispatch } = useContext(SecurityContext);

  // Using useReducer Hook to manage complex state logic for security
  const [, securityDispatch] = useReducer(securityReducer, initialSecurityState);

  // Handle user login/logout
  const handleLogin = () => {
    setLoginStatus(true);
  };

  const handleLogout = () => {
    setLoginStatus(false);
  };

  // Handle security toggle
  const toggleSecurity = () => {
    securityDispatch({ type: 'TOGGLE_SECURITY' });
    dispatch({ type: 'TOGGLE_SECURITY' });
  };

  return (
    <div>
      <h1>Security Page</h1>
      <p>This is the Security Page. You can describe your app's security features here.</p>

      <div>
        <h3>Login Status: {loginStatus ? 'Logged In' : 'Logged Out'}</h3>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div>
        <h3>Security Settings</h3>
        <p>
          Security Enabled: {isSecurityEnabled ? 'Yes' : 'No'}
        </p>
        <button onClick={toggleSecurity}>
          Toggle Security
        </button>
      </div>

      <div>
        <h3>Username</h3>
        <input 
          className='sec_input'
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter your username"
        />
      </div>
    </div>
  );
}

function SecurityProvider({ children }) {
  const [state, dispatch] = useReducer(securityReducer, initialSecurityState);

  return (
    <SecurityContext.Provider value={{ isSecurityEnabled: state.isSecurityEnabled, dispatch }}>
      {children}
    </SecurityContext.Provider>
  );
}

export { Security, SecurityProvider };
