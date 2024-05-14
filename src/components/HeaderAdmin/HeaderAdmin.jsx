// HeaderAdmin.jsx

import React from 'react';
import './HeaderAdmin.css'; // Importa los estilos del header

// Simula la obtención del nombre de usuario logueado, reemplázalo con tu lógica de autenticación
const getUsername = () => {
  // Esta función debería obtener el nombre de usuario del contexto de autenticación
  return 'NombreUsuario'; // Reemplazar con la lógica adecuada
};

const HeaderAdmin = () => {
  const username = getUsername();

  return (
    <header className="header-admin">
      <div className="logo-container">
        <span>PARAISO ADMIN</span>
        {/* Aquí puedes agregar un SVG o imagen para el logo si es necesario */}
      </div>
      <div className="user-container">
        <span>Hola: {username}</span>
        <button onClick={() => { /* Lógica para cerrar sesión */ }}>
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
};

export default HeaderAdmin;
