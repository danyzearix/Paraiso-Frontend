import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ServiciosDia.css';

const ServiciosDia = () => {
    const [misas, setMisas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('URL_DE_TU_API_AQUI')
            .then((response) => {
                setMisas(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1 className='genericTitle'>MISAS</h1>
            <div className="servicios-container">
                {loading ? (
                    <p>Cargando...</p>
                ) : misas.length === 0 ? (
                    <p>NO HAY MISAS PROGRAMADAS PARA EL DÍA DE HOY</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Hora</th>
                                <th>Ubicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {misas.map((misa, index) => (
                                <tr key={index}>
                                    <td>{misa.Nombre}</td>
                                    <td>{misa.hora}</td>
                                    <td>{misa.quienOfrece}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ServiciosDia;

