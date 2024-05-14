import React from 'react';
import { Fragment } from 'react';
import "./Misas.css";
import { DateTime } from 'luxon';

import { useEffect, useState } from 'react';

function Misas() {
  const [appointments, setAppointments] = useState([]);

  const endpoint = 'https://paraisocementerio.a2hosted.com/wp-json/wc/v3/orders';
  const consumerKey = 'ck_2b16e5e1ae884b5b294c1d077bf8ecbeb036ddd6';
  const consumerSecret = 'cs_15b8215315c60cab895eb4c16f8c3779dd89f94a';

  // Objeto para traducir los nombres de los meses
  const monthTranslations = {
    January: 'enero',
    February: 'febrero',
    March: 'marzo',
    April: 'abril',
    May: 'mayo',
    June: 'junio',
    July: 'julio',
    August: 'agosto',
    September: 'septiembre',
    October: 'octubre',
    November: 'noviembre',
    December: 'diciembre',
  };

  useEffect(() => {
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
      }
    })
      .then(response => response.json())
      .then(data => {
        const mappedAppointments = data.map(({ meta_data }) => {
          const { appointment_date, field_full_name } = meta_data[1].value.form_data;

          const friendlyDate = JSON.parse(appointment_date)[0].friendlyDate;

          const dateObject = new Date(friendlyDate);
          const day = dateObject.getDate();
          const month = monthTranslations[dateObject.toLocaleString('en-US', { month: 'long' })];
          const year = dateObject.getFullYear();

          const formattedDate = `${day} de ${month} ${year}`;

          const hora = JSON.parse(appointment_date)[0].friendlyTime;
          const email = JSON.stringify(field_full_name);
          const emailparsed = JSON.parse(email);
          return { fecha: formattedDate, emailparsed, hora };
        });
        setAppointments(mappedAppointments);
      });
  }, []);

  return (
    <Fragment>
    <div className='misasTitle1'><h1 className='genericTtitle'>MISAS</h1>
    </div>
    <div className="misas-container">
      <div className='container-misas'>
      
      <table className="misas-table">
        <thead>
          <tr>
            <th className='fecha'>Fecha</th>
            <th>Nombre</th>
            <th className='hora'>Hora</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(({ fecha, emailparsed, hora }, index) => (
            <tr key={index}>
              <td>{fecha}</td>
              <td>{emailparsed}</td>
              <td>{hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      

      <div class="image-container-misas">
        <img src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2022/09/Diseno-sin-titulo-23-300x300.jpg" alt="Descripción de la imagen"/>
      </div>
    </div>
    </Fragment>
  );
}

export default Misas;
