import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../src/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;