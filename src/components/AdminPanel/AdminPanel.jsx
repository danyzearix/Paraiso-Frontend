// AdminPanel.jsx

import React from 'react';
import './AdminPanel.css'; // Asegúrate de que el nombre de archivo coincida con el CSS que crees
import SidebarPanel from '../SidebarPanel/SidebarPanel';
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin';
import FormularioObituarios from '../FormularioObituarios/FormularioObituarios';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <aside className="sidebar">
        <SidebarPanel/>
      </aside>
      <main className="main-content">
        <header className="header">
          <HeaderAdmin/>
        </header>
        <section
    className="dashboard"
    style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}
>
    <img
        src="https://elparaisoparquecementerio.com/wp-content/uploads/2024/06/SLIDER-scaled.jpg"
        alt=""
        style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }}
    />
</section>

      </main>
    </div>
  );
};

export default AdminPanel;
