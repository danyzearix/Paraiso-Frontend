import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fragment } from 'react';
import "./Obituarios.css";
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

const Obituarios = () => {
  const [fechasOrdenadas, setFechasOrdenadas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://paraiso-node-api-0c5186e80e32.herokuapp.com/api/obituarios`)
      .then(response => {
        console.log('Datos recibidos de la API:', response.data);

        const fechasSort = response.data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        console.log(fechasSort);

        const fechasOrdenadas = fechasSort.map(obituario => {
          const fecha = DateTime.fromISO(obituario.fecha);
          return {
            ...obituario,
            fecha: fecha.toISODate()
          };
        });

        setFechasOrdenadas(fechasOrdenadas);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
        setError('Error al obtener los datos. Por favor, inténtelo de nuevo más tarde.');
        setLoading(false);
      });
  }, []);

  const fechaHoy = DateTime.local().toFormat('yyyy-MM-dd');
  const obituariosHoy = fechasOrdenadas.filter(obituario => obituario.fecha === fechaHoy);
  const fechaHoyFormato = DateTime.local().setLocale('es').toFormat("cccc d 'de' LLLL").toUpperCase();

  if (loading) {
    return <h3>Cargando...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <Fragment>
      <div className='ObiturariosTitle'>
        <h1 className='genericTtitle'>OBITUARIOS</h1>
        <img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Memorial-Service.png" width={52} alt="" />
      </div>

      <div className="containerMainObi">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 className='parrafoVerde'>Servicios del día</h3>
          <h2 className="FechaHoy">{fechaHoyFormato}</h2>
        </div>
      </div>

      <div className='ObituariosContainer'>
        <div className='ObituariosSubcontainer'>
          <div className="container-hijo izquierdaObi">
            <img className='ObiImage' src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Obituarios.jpg" width={210} height={210} alt="" />
          </div>
          <div className="grid obituario-grilla">
            {obituariosHoy.length > 0 ? (
              obituariosHoy.slice(0, 6).map((obituario) => (
                <div className="grid-item" key={obituario.id}>
                  <h3 className='nombrePersona'>{obituario.nombre} (Q.E.P.D)</h3>
                  <p>VELACIÓN: {obituario.velacion}</p>
                  <p>EXEQUIAS: {obituario.exequias}</p>
                  <i className="bi bi-watch"> <span className='hora'>HORA: {obituario.hora}</span></i> <br />
                  <i className="bi bi-geo-alt-fill"> <span className='hora'>DESTINO FINAL: {obituario.destino_final}</span></i>
                </div>
              ))
            ) : (
              <h1>No hay obituarios para hoy, puedes ver el resto de obituarios en el botón de Ver más</h1>
            )}
          </div>
        </div>
      </div>

      <Link to="/ObituariosGenerales">
        <div className="cards-container">
          <button className='greenButton'>Ver todos</button>
        </div>
      </Link>
    </Fragment>
  );
}

export default Obituarios;



