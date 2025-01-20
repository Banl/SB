import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Entidades = () => {
    const [entidades, setEntidades] = useState([]);

    useEffect(() => {
        api.get('/api/entidades')
            .then(response => setEntidades(response.data))
            .catch(error => console.error('Error al obtener entidades', error));
    }, []);

    return (
        <div>
            <h1>Entidades Gubernamentales</h1>
            <ul>
                {entidades.map(entidad => (
                    <li key={entidad.id}>{entidad.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Entidades;
