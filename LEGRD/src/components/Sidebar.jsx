import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>SB</h1>
                <p>SUPERINTENDENCIA DE BANCOS</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/consultar">Consultar</Link></li>
                    <li><Link to="/crear-registro">Crear registro</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
