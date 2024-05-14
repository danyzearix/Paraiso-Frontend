import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fragment } from 'react';
import "./Obituarios.css";
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

const Obituarios = () => {
  
  const [fechasOrdenadas, setFechasOrdenadas] = useState([]);
  const [fechasSort, setFechasSort] = useState([]);

  useEffect(() => {
    axios.get(`https://paraiso-node-api-0c5186e80e32.herokuapp.com/api/obituarios`)
      .then(response => {
        console.log('Datos recibidos de la API:', response.data);

        const fechasSort = response.data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        console.log(fechasSort);

        setFechasSort(fechasSort);

        const fechasOrdenadas = response.data.map(obituario => {
          const fecha = DateTime.fromISO();
          return {
            ...obituario,
            fecha: fecha.toISODate()
            
          };
        });

        setFechasOrdenadas(fechasOrdenadas)
        //console.log(fechasOrdenadas)

      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }, []); // El efecto se ejecutará cuando selectedDate cambie
  


  return (
    <Fragment>
      
      <div className='ObiturariosTitle'>
        <h1 className='genericTtitle'>OBITUARIOS</h1>
        <img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Memorial-Service.png" width={52} alt="" />
      </div>


      <div className="containerMainObi">
        <div>
          <h3 className='parrafoVerde'>Servicios del dia</h3>
        </div>
      </div>

      <div className='ObituariosContainer'>
        <div className='ObituariosSubcontainer'>
          <div className="container-hijo izquierdaObi">
            <img className='ObiImage' src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Obituarios.jpg" width={210} height={210} alt="" />
          </div>
          <div className="grid obituario-grilla">
  {fechasOrdenadas.slice(0, 4).map((obituario) => (
    <div className="grid-item" key={obituario.id}>
      <h3 className='nombrePersona'>{obituario.nombre} (Q.E.P.D)</h3>
      <p>VELACIÓN: {obituario.velacion}</p>
      <p>EXEQUIAS: {obituario.exequias}</p>
      <i className="bi bi-watch"> <span className='hora'>HORA: {obituario.hora}</span></i> <br />
      <i className="bi bi-geo-alt-fill"> <span className='hora'>DESTINO FINAL: {obituario.destino_final}</span></i>
    </div>
  ))}
  {fechasOrdenadas.length === 0 && (
    <h3>No hay obituarios disponibles</h3>
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


