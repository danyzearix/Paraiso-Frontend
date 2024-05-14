import { Link } from 'react-router-dom';
import withScrollAnimation from '../../hoc/withScrollAnimation'; 
import imagen from '../../../../public/welcome.webp';
import icono1 from '../../../../public/urna.png';
import icono2 from '../../../../public/lotes.png';
import icono3 from '../../../../public/soluciones.png';
import './Welcome.css'; // Importa los estilos
import { Fragment } from 'react';
import ImageAccordion from '../Imageacordion/Imageacordion';
import CalendarGeneral from '../CalendarGeneral/CalendarGeneral';
import Obituarios from '../Obituarios/Obituarios';
import ServiciosDia from '../../ServiciosDia/ServiciosDia';
import Misas from '../Misas/Misas';
import QuienesSomos from '../QuienesSomos/QuienesSomos';
import Testimonios from '../Testimonios/Testimonios';
import Titulo from '../Titulo/Titulo';
import Visitanos from '../Visitanos/Visitanos';
import BannerCorreos from '../BannerCorreos/BannerCorreos';
import ContactComponent from '../Contacto/ContactComponent';
import { motion } from 'framer-motion';

const AnimatedObituarios = withScrollAnimation(Obituarios);
const AnimatedMisas = withScrollAnimation(Misas);
const AnimatedQuienesSomos = withScrollAnimation(QuienesSomos);
const AnimatedTestimonios = withScrollAnimation(Testimonios);
const AnimatedTitulo = withScrollAnimation(Titulo);
const AnimatedVisitanos = withScrollAnimation(Visitanos);
const AnimatedBannerCorreos = withScrollAnimation(BannerCorreos);

const Welcome = () => {

  const cardVariants = {
    rest: {
      scale: 1,
      backgroundColor: "#fff",
    },
    hovered: {
      scale: 1.05,
      backgroundColor: "#f5f5f5",
    },
  };

  const buttonVariants = {
    rest: {
      scale: 1,
      backgroundColor: "#085423", // Este es un color verde ejemplo, reemplaza con el color inicial de tu botón si es diferente.
    },
    hovered: {
      scale: 1.1,
      backgroundColor: "#47621F",
    },
  };
  

  document.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach((imageContainer) => {
        const overlay = imageContainer.querySelector('.overlay');
        const titleOutside = imageContainer.parentNode.querySelector('.card .title:not(.title-inside)');
        const titleInside = imageContainer.querySelector('.overlay .title');

        imageContainer.addEventListener('mouseenter', () => {
            overlay.style.display = 'flex';
            titleInside.classList.remove('hidden');
        });

        imageContainer.addEventListener('mouseleave', () => {
            overlay.style.display = 'none';
            titleOutside.style.visibility = 'visible';
            titleInside.classList.add('hidden');
        });
    });
});

  return (
    <Fragment>
    <div className="welcomeContainer">
      <div className="izquierda">
        <img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Servicios-Main.jpg" alt="Imagen de bienvenida" />
      </div>
      <div className="derecha">
        <h4 className='homeTitle'>Bienvenidos</h4>
        <p className='bigParrafo'>Nuestro corazón empresarial está basado en un servicio integral y de calidad.</p>
        <p className='midParrafo'>Somos una organización orientada a satisfacer de manera integral y responsable a las necesidades que se presentan tras la pérdida de un ser querido</p>
        
        <h3 className='homeSubtitle'>Servicios y productos</h3>
        <div className="columnas">
          <div className="columna">
            <img src={icono1} alt="Icono 1"/>
            <p className='mainProducts'>Cenizarios en propiedad</p>
          </div>
          <div className="columna">
            <img src={icono2} alt="Icono 2" />
            <p className='mainProducts'>Soluciones paraiso</p>
          </div>
          <div className="columna">
            <img src={icono3} alt="Icono 3" />
            <p className='mainProducts'>Lotes en propiedad</p>
          </div>
        </div>
      </div>
    </div>
    <div className='midMargin'>
      <h1 className='genericTtitle'>PRODUCTOS</h1>
      <p className='genericSubtitle'>Productos creados pensando en tus seres queridos

</p>
      <hr class="gradient"/>
    </div>
    <div className='productsContainer'>
    
    <div className="cards-container">

    <Link to="/productos" style={{ textDecoration: 'none' }}> 
    <motion.div
      className="card"
      initial="rest"
      whileHover="hovered"
      variants={cardVariants}
    >
      <div className="image-container">
        <img className='productImg' src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/cenizarios-capilla-1-scaled.jpg" alt="Imagen de ejemplo"/>
        <div className="overlay">
          <h3 className="title title-inside hidden"></h3>
        </div>
      </div>
      <h3 className="homeSubtitle">Cenizarios en Capilla</h3>
    </motion.div>
    </Link>

    <Link to="/productos" style={{ textDecoration: 'none' }}> 
    <motion.div
      className="card"
      initial="rest"
      whileHover="hovered"
      variants={cardVariants}
    >
            <div className="image-container">
                <img className='productImg' src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/cenizarios-muro-1-scaled.jpg" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden">Título de ejemplo</h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Cenizarios en Muro</h3>
       </motion.div>
    </Link>

    <Link to="/productos" style={{ textDecoration: 'none' }}>     
      <motion.div
      className="card"
      initial="rest"
      whileHover="hovered"
      variants={cardVariants}
    >
            <div className="image-container">
                <img className='productImg' src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/osarios-muro-1.jpg" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden">Título de ejemplo</h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Osarios en Muro</h3>
    </motion.div>
    </Link>   

    <Link to="/productos" style={{ textDecoration: 'none' }}> 
    <motion.div
      className="card"
      initial="rest"
      whileHover="hovered"
      variants={cardVariants}
    >
            <div className="image-container">
                <img className='productImg' src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Osario-1.png" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden">Título de ejemplo</h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Cenizarios en Tierra</h3>
      </motion.div>
    </Link>

    <Link to="/productos" style={{ textDecoration: 'none' }}> 
    <motion.div
      className="card"
      initial="rest"
      whileHover="hovered"
      variants={cardVariants}
    >
        <div className="image-container">
                <img className='productImg' src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/arbol-cenizario-1.jpg" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden">Título de ejemplo</h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Arbol Cenizario</h3>
    </motion.div>
    </Link>

    <Link to="/productos" style={{ textDecoration: 'none' }}> 
    <motion.div
      className="card"
      initial="rest"
      whileHover="hovered"
      variants={cardVariants}
    >
            <div className="image-container">
                <img className='productImg' src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/lotes-prop.jpg" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden">Título de ejemplo</h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Lotes en Propiedad</h3>
    </motion.div>
    </Link>
        
        </div>
      </div>

      <Link to="/productos" style={{ textDecoration: 'none' }}> 
      <div className="cards-container">
      <motion.button
        className="greenButton"
        variants={buttonVariants}
        initial="rest"
        whileHover="hovered"
      >
        Ver todos los productos
      </motion.button>
    </div>

    </Link>

      <div>
      <h1 className='genericTtitle'>SERVICIOS</h1>
      <p className='genericSubtitle'>Uno de nuestros pilares es servir, te presentamos nuestro listado de servicios</p>
      <hr class="gradient"/>
    </div>

      <div className='acordionContainer'>
      <ImageAccordion imagen="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Previcionexequial-compress.jpg" texto="Previsión exequial" vinculo="https://s.kbe.ai/s/JY3RW" />
      <ImageAccordion imagen="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Servicios-funerarios-compress.jpg" texto="Servicio funerario" vinculo="https://s.kbe.ai/s/RPME9"/>
      <ImageAccordion imagen="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Soluciones-paraiso.jpeg" texto="Soluciones integrales" vinculo="https://s.kbe.ai/s/6N8XE"/>
      <ImageAccordion imagen="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Cremacion.jpg" texto="Servicio de cremación" vinculo="https://s.kbe.ai/s/4DPB2"/>
      </div>

      <Link to="/servicios" style={{ textDecoration: 'none' }}> 
      <div className="cards-container">
      <motion.button
        className="greenButton"
        variants={buttonVariants}
        initial="rest"
        whileHover="hovered"
      >
        Ver todos los servicios
      </motion.button>
    </div>
    </Link>

    

      {/*<div>
      <h1 className='genericTtitle'>EVENTOS Y MISAS</h1>
      <p className='genericSubtitle'>Puedes consultar nuestros eventos y misas especiales</p>
      <hr class="gradient"/>
      </div>

      <div>
        <h2></h2>
        <img src="" alt="" />
      </div>

      <div className='calendar-container'>
      { <CalendarGeneral></CalendarGeneral> }
      </div>*/}

      <AnimatedObituarios/>
      <AnimatedQuienesSomos/>
      <AnimatedTitulo texto="Testimonios" />
      <AnimatedTestimonios/>
      <AnimatedVisitanos/>
      <AnimatedBannerCorreos/>

    
    </Fragment>
  );
};

export default Welcome;

