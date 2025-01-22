import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check for existing auth token on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      setUser({ email: localStorage.getItem('userEmail') });
    }
  }, []);

  const login = (credentials) => {
    const DEFAULT_USER = {
      email: "user@example.com",
      password: "password123"
    };

    if (credentials.emailOrPhone === DEFAULT_USER.email && 
        credentials.password === DEFAULT_USER.password) {
      setIsAuthenticated(true);
      setUser({ email: credentials.emailOrPhone });
      localStorage.setItem('authToken', 'demo-token');
      localStorage.setItem('userEmail', credentials.emailOrPhone);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
