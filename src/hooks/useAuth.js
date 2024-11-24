import React, { createContext, useContext, useReducer } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Initial State
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook: useAuth
export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  // Login action
  const login = (user, token) => {
    dispatch({ type: 'LOGIN', payload: { user, token } });
  };

  // Logout action
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    token: state.token,
    login,
    logout,
  };
};