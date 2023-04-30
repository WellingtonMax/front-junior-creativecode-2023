import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const handleLogin = (username, password) => {
    if (process.env.REACT_APP_USERNAME === username && process.env.REACT_APP_PASSWORD === password) {
      localStorage.setItem('authenticated', 'true');
      setAuthenticated(true);
      return Promise.resolve();
    } else {
      return Promise.reject(new Error('Invalid username or password'));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    setAuthenticated(false);
  };

  return {
    authenticated,
    handleLogin,
    handleLogout,
  };
}

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(isLoggedIn());

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function isLoggedIn() {
  return localStorage.getItem('authenticated') === 'true';
}
