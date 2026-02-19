import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Custom hook to use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing user session on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('netflix-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('netflix-user', JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('netflix-user');
  };

  // Signup function
  const signup = (userData) => {
    setUser(userData);
    localStorage.setItem('netflix-user', JSON.stringify(userData));
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    login,
    logout,
    signup,
    isAuthenticated,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
