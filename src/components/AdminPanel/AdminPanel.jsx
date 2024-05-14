// AdminPanel.jsx

import React from 'react';
import './AdminPanel.css'; // Asegúrate de que el nombre de archivo coincida con el CSS que crees
import SidebarPanel from '../SidebarPanel/SidebarPanel';
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin';

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
        <section className="dashboard">
          {/* Contenido del dashboard, como el calendario y los resúmenes */}
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
