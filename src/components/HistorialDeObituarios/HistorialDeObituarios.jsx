import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import './HistorialDeObituarios.css';

const HistorialDeObituarios = () => {
  const [obituarios, setObituarios] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroFecha, setFiltroFecha] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://paraiso-node-api-0c5186e80e32.herokuapp.com/api/obituarios')
      .then((response) => {
        setObituarios(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API:', error);
        setError('Error al obtener los datos. Por favor, inténtelo de nuevo más tarde.');
        setLoading(false);
      });
  }, []);

  const handleChangeNombre = (event) => {
    setFiltroNombre(event.target.value);
  };

  const handleChangeFecha = (event) => {
    setFiltroFecha(event.target.value);
  };

  const filtrarPorNombre = (obituario) => {
    if (!filtroNombre) return true;
    return obituario.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
  };

  const filtrarPorFecha = (obituario) => {
    if (!filtroFecha) return true;
    return obituario.fecha === filtroFecha;
  };

  const obituariosFiltrados = obituarios.filter(filtrarPorNombre).filter(filtrarPorFecha);

  if (loading) {
    return <h3>Cargando...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <Fragment>
        <div className="separador-dos"></div>
        <div className="ObiturariosTitle">
          <h1 className="genericTtitle">Historial de obituarios</h1>
          <img
            src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/05/historialobi.png"
            width={52}
            alt=""
          />
        </div>

        <div className="ObituariosGeneralesContainer">
          <div className="filters">
            <input
              type="text"
              placeholder="Filtrar por nombre"
              value={filtroNombre}
              onChange={handleChangeNombre}
            />
          </div>

          <div className="filters">
            <input
              type="date"
              placeholder="Filtrar por fecha"
              value={filtroFecha}
              onChange={handleChangeFecha}
            />
          </div>

          <div className="grid">
            {obituariosFiltrados.map((obituario) => (
              <div className="grid-item" key={obituario.id}>
                <h3 className="nombrePersona">{obituario.nombre} (Q.E.P.D)</h3>
                <p>VELACIÓN: {obituario.velacion}</p>
                <p>EXEQUIAS: {obituario.exequias}</p>
                <i className="bi bi-watch">
                  <span className="hora">HORA: {obituario.hora}</span>
                </i>
                <br />
                <i className="bi bi-geo-alt-fill">
                  <span className="hora">DESTINO FINAL: {obituario.destino_final}</span>
                </i>
              </div>
            ))}
          </div>

          {obituariosFiltrados.length === 0 && (
            <h1>No se encontraron obituarios con los criterios de búsqueda.</h1>
          )}
        </div>

    </Fragment>
  );
};

export default HistorialDeObituarios;
