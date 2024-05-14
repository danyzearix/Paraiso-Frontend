import React from 'react';
import './BannerCorreos.css';

const BannerCorreos = () => {
  return (
    <div className="banner-correos-container">
      <div className="banner-column">
        <h2 className="subtituloWhite">SERVICIO AL CLIENTE</h2>
        <p className="parrafo">📧 E-mail: s.cliente@elparaisoparquecementerio.com</p>
        <a href="https://www.elparaisoparquecementerio.com/clausulado.pdf" target="_blank" rel="noopener noreferrer"><button className="boton">Términos y Condiciones - Clausulado</button></a>
      </div>
      <div className="banner-column">
        <h2 className="subtituloWhite">PQRS</h2>
        <p className="parrafo">📧 E-mail: pqrs@elparaisoparquecementerio.com</p>
        <a href="https://www.elparaisoparquecementerio.com/politica.pdf" target="_blank" rel="noopener noreferrer"><button className="boton">Política de tratamiento de datos de la información</button></a>
      </div>
    </div>
  );
};

export default BannerCorreos;
