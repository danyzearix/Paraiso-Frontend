import React, {Fragment} from 'react';
import "./Countdown.css"

import { useState, useEffect } from 'react';

const Countdown = () => {
  // Define la fecha de inicio en formato de objeto de fecha de JavaScript
  const fechaInicio = new Date(2024, 5, 16, 8
    , 0, 0); // Año, mes (0-indexado), día, hora, minuto, segundo

  // Inicializa los estados de cuenta atrás y la fecha actual
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [fechaActual, setFechaActual] = useState(new Date());

  // Actualiza los estados de cuenta atrás cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setFechaActual(new Date()); // Actualiza la fecha actual

      const tiempoRestante = fechaInicio.getTime() - fechaActual.getTime();

      // Calcula los días, horas y minutos restantes
      const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24)) ?? 0;
      const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ?? 0;
      const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)) ?? 0;

      // Actualiza los estados con los valores de cuenta atrás calculados
      setDias(dias);
      setHoras(horas);
      setMinutos(minutos);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
    return () => clearInterval(interval);
  }, [fechaActual]);

  return (
    <div className="padre">
      <div className="hijo">
        <h2>Próximo evento:</h2>
        <p>Día del padre 🧔‍♂️</p>
      </div>
      <div className="hijo">
        <h1>{dias < 10 ? `0${dias}` : dias}</h1>
        <p>Días</p>
      </div>
      <div className="hijo">
        <h1>{horas < 10 ? `0${horas}` : horas}</h1>
        <p>Horas</p>
      </div>
      <div className="hijo">
        <h1>{minutos < 10 ? `0${minutos}` : minutos}</h1>
        <p>Minutos</p>
      </div>
    </div>

  );
};

export default Countdown;