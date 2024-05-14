import React from 'react';
import './Visitanos.css';
import Titulo from '../Titulo/Titulo';

const Visitanos = () => {
  return (
    <div className="visitanos-container">
 <Titulo texto="Visítanos" />
      <div className="icono-container">
        <img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/Maps-icon.png" alt="Icono" className="icono" />
      </div>
      <h3 className="subtitulo">OFICINA PRINCIPAL Y PARQUE CEMENTERIO</h3>
      <p className="texto-gris">Kilometro 1.5 vía Autopista Medellín</p>
      <div className="contenedor-mapa">
        {/* <div className="contenedor-imagen"></div> */}
        <div className="contenedor-iframe">
          <iframe
            title="Google Map"
            width="80%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63618.68992619661!2d-74.20135316874999!3d4.740831000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f837a48926137%3A0x4fd6f716412e8ff!2sParque%20Cementerio%20El%20Para%C3%ADso!5e0!3m2!1ses!2sco!4v1691665954980!5m2!1ses!2sco"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <h3 className="subtitulo">OFICINA PRINCIPAL Y PARQUE CEMENTERIO</h3>
      <p className="texto-gris">Kilometro 1.5 vía Autopista Medellín</p>
      <div className="contenedor-mapa">
        {/* <div className="contenedor-imagen"></div> */}
        <div className="contenedor-iframe">
          <iframe
            title="Google Map"
            width="80%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63624.2396359524!2d-74.12531656875004!3d4.680176300000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b851c6e62d7%3A0x3d658a93d10103b4!2sInversiones%20El%20Paraiso%20Parque%20Cementerio%20SAS!5e0!3m2!1ses!2sco!4v1691666050100!5m2!1ses!2sco"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Visitanos;
