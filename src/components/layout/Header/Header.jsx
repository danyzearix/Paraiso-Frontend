import React, {useContext, useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import "./Header.css"



function Header() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (

    <div className='header-container'>
    <div className='icon-nav'>
    <i className="bi bi-telephone-inbound-fill"></i>
    </div>

    <div className='info-container'>
       <p>Parque cementerio: (601) 8966280 – (601) 8966281  
        <br/> Of. Admin: + 57 (601) 2564809 – Celular 24 horas: +57 3160271139</p>
    </div>

    <div>
        <a href="https://zonapagos.com/t_Inversionesparaiso/pagos.asp"><button className='pay-button'> Pagos <i className="bi bi-coin"></i> </button></a>
    </div>
</div>
  )
}

export default Header
