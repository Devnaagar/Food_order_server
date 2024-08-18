import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component }) => {
    const adminId = sessionStorage.getItem('admin_id');
    return adminId ? Component : <Navigate to="/admin" />;
};

export default PrivateRoute;
