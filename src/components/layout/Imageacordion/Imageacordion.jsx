import React from 'react';
import './ImageAcordion.css';
import "../../Shared.css"

const ImageAccordion = ({ imagen, texto, vinculo }) => {
  return (
    <div className="imageAccordion">
      <img src={imagen} alt={texto} />
      <div className="contenido">
        <h1>{texto}</h1>
        <a href={vinculo} target="_blank" rel="noopener noreferrer"><button className='genericButton'>Cotizar servicio</button></a>
      </div>
    </div>
  );
}

export default ImageAccordion;
