import React, { useState } from 'react';
import api from '../services/api';

const Login = () => {
    const [clientId] = useState(import.meta.env.VITE_CLIENT_ID);
    const [clientSecret] = useState(import.meta.env.VITE_CLIENT_SECRET);
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await api.post('/api/auth/token','{"clientId": "App1","clientSecret": "jpoolvalverder@gmail.com"}');
            const { token } = response.data;
            localStorage.setItem('token', token);
        } catch (err) {
            setError("Error al iniciar sesión");
            console.error(err);
        }
    };

    return (
        <div>
            <icon alt='d' href='./assets/react.svg' onLoad={handleLogin}></icon>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
