import React from 'react';
import Login from './components/login';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const App = () => {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID || null;
    const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET || null;
    return (
        <div className="App">
            <Login />
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default App;