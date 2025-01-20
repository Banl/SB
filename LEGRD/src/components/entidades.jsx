import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Entidades = () => {
    const [entidades, setEntidades] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEntidades = async () => {
            try {
                const response = await api.get('/entidades');
                setEntidades(response.data);
            } catch (err) {
                setError('Error al obtener las entidades. Verifique el token o la API.');
            }
        };

        fetchEntidades();
    }, []);

    return (
        <div>
            <h1>Entidades Gubernamentales</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {entidades.map((entidad) => (
                    <li key={entidad.id}>
                        {entidad.nombre} - <a href={`https://${entidad.sitioWeb}`} target="_blank" rel="noopener noreferrer">{entidad.sitioWeb}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Entidades;
