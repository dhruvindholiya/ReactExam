import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../User/containers/Home';
import Product from '../User/containers/Product'
import Header from '../User/components/Header';
import Login from '../User/containers/Login/LoginPage';
import PrivateRoutes from './PrivateRoutes';
import Course from '../User/containers/Course/Course';
import PageError from '../User/containers/404';

function AdminRouts(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route element={<PrivateRoutes />}>
                    <Route path='/Product' element={<Product />} />
                </Route>
                <Route path='/courses' element={<Course />} />
                <Route path='/Login' element={<Login />} />
                <Route path='*' element={<PageError />} />
            </Routes>
        </>
    );
}

export default AdminRouts;