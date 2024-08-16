import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "../../../assets/logo-web.png"
import "./NavBar.css"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar-container'>
        <div className='nav-logo'>
            <img src={logo} alt="" width={200} />
        </div>

        <div className='hamburger-icon' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <ul className='lista-menu'>
            <li><Link to="/adminpanel" onClick={() => setIsOpen(false)}>Inicio</Link></li>
            
            </ul>
        </div>
    </div>
  )
}

export default NavBar;


