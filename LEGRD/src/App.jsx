import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Consulta from './components/Consult';
import Crear from './components/Crear';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID || null;
    const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET || null;
    return (
        <div className="App">
            <Login />
            <div className="content">
                <Sidebar className="sidebar" />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Consulta />} />
                        <Route path="/crear-registro" element={<Crear />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;