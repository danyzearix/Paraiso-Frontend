import React from 'react'
import "./QuienesSomos.css"

const QuienesSomos = () => {
  return (
    <div className='QuienesSomosContainer'>
        <div>
            <h1 className='genericTtitle'>QUIENES SOMOS</h1>
            <p className='QuienesSomosTexto'>Somos una organización orientada a satisfacer de manera integral y responsable las necesidades que se presentan tras la perdida se un ser querido, ofreciendo una solución confiable, con altos estándares de calidad de manera eficiente y digna , a través de un equipo de trabajo con sentido humano con compromiso social y de respeto para nuestros clientes, prestando servicios funerarios y de parque cementerio, para cubrir una necesidad inmediata, o para prever los gastos y tramites que requiere un deceso , facilitando el acceso a nuestros servicios y productos de una manera oportuna, entregando así los mejores beneficios para usted y su familia.</p>
        </div>

        <div className="video-container"> {/* Agregamos la clase CSS al contenedor */}
      <iframe
        title="Video de YouTube"
        src="https://www.youtube.com/embed/iVcM3rqqKtU?list=PLrGo3GVbXkhhyz3vzEj0VaVzbIeStCM31"
        frameBorder="0"
        allowFullScreen
      ></iframe> 
        </div>

      <h1 className='genericTtitle'>GALERÍA</h1>
      <div className="galeria-container"> {/* Agregamos la clase CSS al contenedor */}
      <div className="grid-containerDos">
        <div className="grid-itemDos"><img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/galeria4_2.webp" alt="" srcset="" /></div>
        <div className="grid-itemDos"><img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/galeria3.webp" alt="" srcset="" /></div>
        <div className="grid-itemDos"><img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/galeria2.webp" alt="" srcset="" /></div>
        <div className="grid-itemDos"><img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/galeria1.webp" alt="" srcset="" /></div>
        <div className="grid-itemDos"><img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/galeria8_2.webp" alt="" srcset="" /></div>
        <div className="grid-itemDos"><img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/galeria7_2.webp" alt="" srcset="" /></div>
        <div className="grid-itemDos"><img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/galeria6_2.webp" alt="" srcset="" /></div>
        <div className="grid-itemDos"><img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/galeria5.webp" alt="" srcset="" /></div>
      </div>
    </div>

    </div>
  )
}

export default QuienesSomos
