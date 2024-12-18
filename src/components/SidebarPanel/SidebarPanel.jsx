// SidebarPanel.jsx

import React from 'react';
import './SidebarPanel.css'; // Importa los estilos del sidebar
import { Link } from 'react-router-dom'

const SidebarPanel = () => {
  return (
    <aside className="sidebar">
      <div className="menu-section">
        <h3>Dashboard 📊</h3>
        <ul className="menu-list">
  {/* Los enlaces externos abren en una nueva pestaña */}
  <li><a href="https://paraisocementerio.a2hosted.com/wp-admin/admin.php?page=jet-apb-appointments" target="_blank" rel="noopener noreferrer">Misas ⛪</a></li>
  
  {/* Los enlaces internos con <a> para abrir en una nueva pestaña */}
  <li><a href="/FormularioObituarios" target="_blank" rel="noopener noreferrer">Subir Obituarios ✝️</a></li>
  <li><a href="/EditarObituarios" target="_blank" rel="noopener noreferrer">Editar Obituarios ✝️</a></li>
  <li><a href="/register" target="_blank" rel="noopener noreferrer">Crear usuario 🧑</a></li>
  <li><a href="/FormularioMisa" target="_blank" rel="noopener noreferrer">Formulario misas 🧑</a></li>
  <li><a href="/MisasAdmin" target="_blank" rel="noopener noreferrer">Administración misas 🧑</a></li>
  
  {/* Otro enlace externo que se abre en una nueva pestaña */}
  <li><a href="https://paraisocementerio.a2hosted.com/wp-admin/edit.php?post_type=product" target="_blank" rel="noopener noreferrer">Administrar tienda 🏪</a></li>
</ul>

      </div>
    </aside>
  );
};

export default SidebarPanel;
