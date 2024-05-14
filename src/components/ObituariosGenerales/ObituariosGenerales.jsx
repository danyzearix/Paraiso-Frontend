import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import './ObituariosGenerales.css';

const ObituariosGenerales = () => {
  const [obituarios, setObituarios] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [ordenFecha, setOrdenFecha] = useState(true);
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    axios
      .get('https://paraiso-node-api-0c5186e80e32.herokuapp.com/api/obituarios')
      .then((response) => {
        setObituarios(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }, []);

  const bogotaTime = DateTime.local().setZone('America/Bogota');
  const formattedDate = bogotaTime.toLocaleString(DateTime.DATE_FULL);

  const handleChangeNombre = (event) => {
    setFiltroNombre(event.target.value);
    setPaginaActual(1); // Resetear a la primera página al cambiar el filtro
  };

  const handleChangeOrden = (event) => {
    setOrdenFecha(event.target.checked);
  };

  const handleChangeFecha = (event) => {
    setFechaSeleccionada(event.target.value);
    setPaginaActual(1); // Resetear a la primera página al cambiar la fecha seleccionada
  };

  const filtrarPorNombre = (obituario) => {
    if (!filtroNombre) return true;
    return obituario.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
  };

  const filtrarPorFecha = (obituario) => {
    if (!fechaSeleccionada) return true;
    return obituario.fecha === fechaSeleccionada;
  };

  const compararFechas = (a, b) => {
    const fechaA = DateTime.fromISO(a.fecha);
    const fechaB = DateTime.fromISO(b.fecha);
    return ordenFecha ? fechaB - fechaA : fechaA - fechaB;
  };

  const ResultadosPorPagina = 10;
  const indiceInicial = (paginaActual - 1) * ResultadosPorPagina;
  const indiceFinal = paginaActual * ResultadosPorPagina;

  return (
    <Fragment>
      <div className="obituariosGeneral">
        <div className="obituariosGeneral-header">
          <h1 className="servicios-title">Obituarios</h1>
        </div>

        <div className="containerMainObi">
          <div>
            <h3 className="parrafoGris">{formattedDate}</h3>
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
            {obituarios
              .filter(filtrarPorNombre)
              .filter(filtrarPorFecha)
              .sort(compararFechas)
              .slice(indiceInicial, indiceFinal)
              .map((obituario) => (
                <div className="grid-item" key={obituario.id}>
                  <h3 className="nombrePersona">{obituario.nombre} (Q.E.P.D)</h3>
                  <p>VELACIÓN: {obituario.velacion}</p>
                  <p>EXEQUIAS: {obituario.exequias}</p>
                  <i className="bi bi-watch">
                    <span className="hora">HORA: {obituario.hora}</span>
                  </i>{' '}
                  <br />
                  <i className="bi bi-geo-alt-fill">
                    <span className="hora">DESTINO FINAL: {obituario.destino_final}</span>
                  </i>
                </div>
              ))}
          </div>

          {/* Botones de paginación */}
          <div className="pagination">
            <button onClick={() => setPaginaActual(paginaActual - 1)} disabled={paginaActual === 1}>
              Anterior
            </button>
            <button
              onClick={() => setPaginaActual(paginaActual + 1)}
              disabled={indiceFinal >= obituarios.length}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ObituariosGenerales;

