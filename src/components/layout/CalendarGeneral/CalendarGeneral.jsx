import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import "./CalendarGeneral.css"

const CalendarGeneral = () => {
  const [eventos, setEventos] = useState([]);
  
  useEffect(() => {
    axios.get('YOUR_API_URL')
      .then(response => {
        // Suponiendo que la API devuelve un array de eventos
        setEventos(response.data);
      })
      .catch(error => console.error('Error obteniendo eventos:', error));
  }, []);

  return (
    <div>
      <Calendar
        // Mostramos sólo el mes actual
        view="month"
        activeStartDate={new Date()}
      />
      <div>
        <h2>Eventos del mes:</h2>
        {eventos.map((evento, index) => (
          <div key={index}>
            <h3>{evento.nombre}</h3>
            <p>Día: {evento.dia}</p>
            <p>Hora: {evento.hora}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGeneral;
