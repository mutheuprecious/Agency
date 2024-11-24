import React, { createContext, useState, useContext } from 'react';

// Create Context
const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Holds authenticated user data
  const [theme, setTheme] = useState('light'); // Example for theme management
  const [loading, setLoading] = useState(false); // Global loading state

  // Login Function
  const login = (userData) => {
    setLoading(true);
    // Simulate a login API call
    setTimeout(() => {
      setUser(userData);
      setLoading(false);
    }, 1000);
  };

  // Logout Function
  const logout = () => {
    setUser(null);
  };

  // Toggle Theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook to Use AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};