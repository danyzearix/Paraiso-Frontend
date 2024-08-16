import { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import moment from 'moment';
import Auth from './components/Auth/Auth';
import 'moment/locale/es';
import './App.css';
import Header from './components/layout/Header/Header';
import NavBar from './components/layout/NavBar/NavBar';
import Home from './components/Home/Home';
import Productos from './components/Productos/Productos';
import Servicios from './components/Servicios/Servicios';
import FormularioObituarios from './components/FormularioObituarios/FormularioObituarios';
import ObituariosGenerales from './components/ObituariosGenerales/ObituariosGenerales';
import Footer from './components/layout/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import AdminPanel from "./components/AdminPanel/AdminPanel";
import SalasVelacion from './components/SalasVelacion/SalasVelacion';
import EditarObituarios from './components/EditarObituarios/EditarObituarios';


const slides = [
  {
    image: 'https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/05/Facebook-banner.png',
    title: 'Renovamos nuestras redes sociales',
    subtitle: 'Encuéntralas dando clic en el botón',
    button: 'Ver Links',
    url: 'https://www.atom.bio/paraiso_parque_cementerio/'
  },
  {
    image: 'https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/pagos-slider-paraiso.jpg',
    title: 'Realiza tus pagos en línea',
    subtitle: 'Renovamos nuestros métodos de pago',
    button: 'Realizar pago',
    url: 'https://zonapagos.com/t_Inversionesparaiso/pagos.asp'
  },
  {
    image: "https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/slider-quienes-somos-paraiso.jpg",
    title: 'Somos el primer parque cementerio',
    subtitle: 'Al noroccidente de Bogotá',
    button: 'En que podemos ayudarte?',
    url: 'https://wa.link/ol413d'
  },
  {
    image: 'https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/prevision-paraiso-slider.jpg',
    title: 'Adquiere tu plan de previsión exequial',
    subtitle: 'Creamos una solución para brindar seguridad a ti y tu familía',
    button: 'Conocer más'
  },
  {
    image: 'https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/slide4.jpg',
    title: 'Salas de velación Paraiso',
    subtitle: 'Diseñamos un espacio para honrar a tus seres queridos',
    button: 'Conocer más'
  }
];



function App() {
  
  const [count, setCount] = useState(0)

  return (
    <Router>

  <Routes>
    <Route path="/" element={<Auth><AdminPanel /></Auth>} />
    <Route path="/login" element={<LoginForm/>} />
    <Route path="/register" element={<Auth><RegisterForm /></Auth>} />
    <Route path="/adminpanel" element={<Auth><AdminPanel /></Auth>} />
    <Route path="/FormularioObituarios" element={<Auth><FormularioObituarios /></Auth>} />
    <Route path="/EditarObituarios" element={<Auth><EditarObituarios /></Auth>} />
    <Route path="/" element={<Navigate replace to="/login" />} />
    <Route path="/ObituariosGenerales" element={<ObituariosGenerales/>} />


    

  </Routes>
</Router>
  )
}

export default App
