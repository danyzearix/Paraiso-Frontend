import React, { useState } from 'react';
import axios from 'axios';
import "./RegisterForm.css"

const RegisterForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      await axios.post('https://paraiso-node-api-0c5186e80e32.herokuapp.com/api/usuarios/registro', {
        nombre,
        email,
        password,
      });
      // Lógica post-registro (como redireccionar o mostrar un mensaje de éxito)
    } catch (err) {
      // Manejo de errores de registro
      if (err.response) {
        setError(err.response.data);
      } else {
        setError('Error al conectar con el servidor');
      }
    }
  };

  return (
    <form className='formRegister' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegisterForm;
