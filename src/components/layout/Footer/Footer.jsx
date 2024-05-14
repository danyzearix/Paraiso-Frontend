import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineFileText, AiOutlineDollarCircle, AiOutlineRead, AiOutlineCompass, AiOutlineMail } from 'react-icons/ai';
import './Footer.css';
import logo from "../../../assets/logo-web.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <img src={logo} alt="Logo" className="logo" />
        <p className="footer-text">Somos el primer parque cementerio ubicado al noroccidente de Bogotá</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100094354212462" className="social-icon"><FaFacebook /></a>
          <a href="https://www.instagram.com/elparaisoparquecementerio/?hl=es" className="social-icon"><FaInstagram /></a>
          <a href="https://www.youtube.com/@ELPARAISOPARQUECEMENTERIO" className="social-icon"><FaYoutube /></a>
          <a href="https://wa.link/ol413d" className="social-icon"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="footer-column">
        <h3 className="footer-subtitulo">Links de interés</h3>
        <ul className="footer-links">
          <li><a href="https://elparaisoparquecementerio.com/"><AiOutlineHome /> Inicio</a></li>
          <li><a href="https://elparaisoparquecementerio.com/productos"><AiOutlineFileText /> Productos</a></li>
          <li><a href="https://elparaisoparquecementerio.com/servicios"><AiOutlineDollarCircle /> Servicios</a></li>
          <li><a href="https://elparaisoparquecementerio.com/ObituariosGenerales"><AiOutlineRead /> Obituarios</a></li>
          <li><a href="https://paraisocementerio.a2hosted.com/misas-y-eventos/"><AiOutlineCompass /> Misas y Reservas</a></li>
          <li><a href="#"><AiOutlineMail /> Contáctanos</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-subtitulo">Contacto</h3>
        <p>OFICINA PRINCIPAL Y PARQUE CEMENTERIO</p>
        <p>🗺️ Km. 1.5 Autopista Medellín - Vía Siberia - Cota, Cundinamarca</p>
        <p>📲 Tels: +57 (1) 896 6280</p>
        <p>+57 (1) 896 6281</p>
        <p>Fax: 896 6284</p>
      </div>
      <div className="footer-column">
        <h3 className="footer-subtitulo">OFICINA ADMINISTRATIVA</h3>
        <p>🗺️ Carrera 45 A # N° 91-85 Bogotá D.C</p>
        <p>📠 PBX: +57 (1) 256 4809</p>
      </div>
    </div>
  );
};

export default Footer;
