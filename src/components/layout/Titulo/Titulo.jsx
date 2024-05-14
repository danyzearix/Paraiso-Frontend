import React from 'react';
import PropTypes from 'prop-types';
import './Titulo.css';

const Titulo = ({ texto }) => {
  return (
    <div className="titulo-container">
      <h1 className="titulo-texto">{texto}</h1>
      <div className="separador"></div>
    </div>
  );
};

Titulo.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Titulo;
