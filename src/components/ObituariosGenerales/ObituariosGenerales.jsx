import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import './ObituariosGenerales.css';
import HistorialDeObituarios from '../HistorialDeObituarios/HistorialDeObituarios';

const ObituariosGenerales = () => {
  const [obituarios, setObituarios] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState('');
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

  const fechaHoy = DateTime.local().toFormat('yyyy-MM-dd');
  const obituariosHoy = obituarios.filter(obituario => obituario.fecha === fechaHoy);
  const fechaHoyFormato = DateTime.local().setLocale('es').toFormat("cccc d 'de' LLLL").toUpperCase();

  const handleChangeNombre = (event) => {
    setFiltroNombre(event.target.value);
  };

  const filtrarPorNombre = (obituario) => {
    if (!filtroNombre) return true;
    return obituario.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
  };

  if (loading) {
    return <h3>Cargando...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <Fragment>
      <div className="obituariosGeneral">
        <div className="obituariosGeneral-header">
          <h1 className="servicios-title">OBITUARIOS</h1>
        </div>

        <div className="containerMainObi" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <h3 className="parrafoGris">{fechaHoyFormato}</h3>
          </div>
        </div>

        <div className="ObiturariosTitle">
          <h1 className="genericTtitle">Servicios del día</h1>
          <img
            src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Memorial-Service.png"
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

          <div className="grid">
            {obituariosHoy
              .filter(filtrarPorNombre)
              .map((obituario) => (
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

          {obituariosHoy.length === 0 && (
            <h1>No hay obituarios para hoy.</h1>
          )}
        </div>
      </div>

      <div>
        <HistorialDeObituarios></HistorialDeObituarios>
      </div>
    </Fragment>
  );
};

export default ObituariosGenerales;

