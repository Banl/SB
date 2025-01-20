import React, { useState } from 'react';
import api from '../services/api';
import react from '../assets/logo-superintendencia-de-bancos.svg'
import './login.css';
const Login = () => {
    const [clientId] = useState(import.meta.env.VITE_CLIENT_ID);
    const [clientSecret] = useState(import.meta.env.VITE_CLIENT_SECRET);
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await api.post('/api/auth/token', '{"clientId": "App1","clientSecret": "jpoolvalverder@gmail.com"}');
            const { token } = response.data;
            localStorage.setItem('token', token);
        } catch (err) {
            setError("Error al iniciar sesión");
            console.error(err);
        }
    };

    return (
        <div className="headreTop">
            <div className="login-container">
                <img alt="logo" title="logo" className="logo" src={react} onLoad={handleLogin} />
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default Login;
