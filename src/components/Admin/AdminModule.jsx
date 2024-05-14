import React, { useState } from 'react';
import { Fragment } from 'react';
import './AdminModule.css';

const AdminModule = () => {
  const [nombreFallecido, setNombreFallecido] = useState('');
  const [velacion, setVelacion] = useState('');
  const [exequias, setExequias] = useState('');
  const [hora, setHora] = useState('');
  const [destinoFinal, setDestinoFinal] = useState('');

  const handleNombreChange = (e) => {
    setNombreFallecido(e.target.value);
  };

  const handleVelacionChange = (e) => {
    setVelacion(e.target.value);
  };

  const handleExequiasChange = (e) => {
    setExequias(e.target.value);
  };

  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  const handleDestinoFinalChange = (e) => {
    setDestinoFinal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nombreFallecido,
      velacion,
      exequias,
      hora,
      destinoFinal
    };

    // Guardar los datos en formato JSON
    const jsonData = JSON.stringify(data);

    // Hacer algo con los datos (por ejemplo, enviarlos a un servidor)
    console.log(jsonData)

    // Limpiar los campos del formulario
    setNombreFallecido('');
    setVelacion('');
    setExequias('');
    setHora('');
    setDestinoFinal('');
  };

  return (
    <Fragment>
    <div className="productos-header">
        <h1 className="productos-title">Administrador</h1>
      </div>
    <form className="formulario" onSubmit={handleSubmit}>
      <label>
        Nombre del Fallecido:
        <input
          type="text"
          value={nombreFallecido}
          onChange={handleNombreChange}
          className="input"
        />
      </label>
      <br />
      <label>
        Velación:
        <input
          type="text"
          value={velacion}
          onChange={handleVelacionChange}
          className="input"
        />
      </label>
      <br />
      <label>
        Exequias:
        <input
          type="text"
          value={exequias}
          onChange={handleExequiasChange}
          className="input"
        />
      </label>
      <br />
      <label>
        Hora:
        <input
          type="text"
          value={hora}
          onChange={handleHoraChange}
          className="input"
        />
      </label>
      <br />
      <label>
        Destino Final:
        <input
          type="text"
          value={destinoFinal}
          onChange={handleDestinoFinalChange}
          className="input"
        />
      </label>
      <br />
      <button type="submit" className="boton">Enviar</button>
    </form>
    </Fragment>
  );
};

export default AdminModule;

