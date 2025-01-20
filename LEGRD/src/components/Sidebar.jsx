import { Link } from 'react-router-dom';
import React from 'react';
import reactLogo from '../assets/react.svg'
import Login from './Login';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li>
                        <img className="Logo" src={reactLogo} /> |
                        <Link to="/">Consultar</Link>
                    </li>
                    <li><Link to="/crear-registro">Crear registro</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
