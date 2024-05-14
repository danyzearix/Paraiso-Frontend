import React from 'react';
import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const token = localStorage.getItem('auth-token');

  if (!token) {
    // Usuario no autenticado, redireccionar a login
    return <Navigate to="/login" />;
  }

  // Usuario autenticado, mostrar el componente
  return children;
};
 
export default Auth;