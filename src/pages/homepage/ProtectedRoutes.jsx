import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const userData = sessionStorage.getItem('userdata');
    
  return userData? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes