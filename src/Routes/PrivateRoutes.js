import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
    const loaclLoginStatus = localStorage.getItem('loginStatus');
    if (loaclLoginStatus) {
        return <Outlet />;
    } else {
        alert("You cannot access this page without logging in.");
        return <Navigate to={"/login"} />;
    }
}

export default PrivateRoutes;
