// src/Routes/PublicRoutes
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../components/Login';
import Logout from '../components/Logout';
import Register from '../components/Register';
import Home from '../components/Home';

function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="register" element={<Register />} />
        </Routes>
    );
}

export default PublicRoutes;