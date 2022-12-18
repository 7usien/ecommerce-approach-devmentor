import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isLoginPage = false }) => {
  const { isLogged } = useSelector((state) => state.authSlice);

  if (isLoginPage) return <>{isLogged ? <Navigate to='/' /> : children}</>;

  return <>{isLogged ? children : <Navigate to='/login' />}</>;
};

export default ProtectedRoute;
