import React, { useState, useEffect } from 'react';

const MisasAdmin = () => {
  // Datos simulados de misas
  const [data, setData] = useState([
    {
      tipoMisa: 'Misa rezada',
      nombresDifuntos: ['Juan Pérez', 'María López'],
      mensaje: 'En memoria de nuestros seres queridos.',
      fecha: '2023-10-30',
      hora: '10:00 AM',
    },
    {
      tipoMisa: 'Misa cantada',
      nombresDifuntos: ['Carlos García'],
      mensaje: 'Descansa en pazDescansa en',
      fecha: '2023-11-01',
      hora: '12:00 PM',
    },
    // Puedes agregar más datos aquí
  ]);

  // Estado para los datos filtrados
  const [filteredData, setFilteredData] = useState(data);

  // Estados para los filtros
  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroTipoMisa, setFiltroTipoMisa] = useState('');
  const [filtroFecha, setFiltroFecha] = useState('');

  // Actualizar los datos filtrados cuando cambien los filtros
  useEffect(() => {
    let datosFiltrados = data;

    // Filtrar por nombre
    if (filtroNombre) {
      datosFiltrados = datosFiltrados.filter((item) =>
        item.nombresDifuntos.some((nombre) =>
          nombre.toLowerCase().includes(filtroNombre.toLowerCase())
        )
      );
    }

    // Filtrar por tipo de misa
    if (filtroTipoMisa) {
      datosFiltrados = datosFiltrados.filter(
        (item) => item.tipoMisa === filtroTipoMisa
      );
    }

    // Filtrar por fecha
    if (filtroFecha) {
      datosFiltrados = datosFiltrados.filter(
        (item) => item.fecha === filtroFecha
      );
    }

    setFilteredData(datosFiltrados);
  }, [filtroNombre, filtroTipoMisa, filtroFecha, data]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Administración de Misas</h2>

      {/* Filtros */}
      <div className="mb-4">
        <h5>Filtros</h5>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
              placeholder="Buscar por nombre"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>Tipo de misa:</label>
            <select
              className="form-control"
              value={filtroTipoMisa}
              onChange={(e) => setFiltroTipoMisa(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Misa rezada">Misa rezada</option>
              <option value="Misa comunitaria - Solo domingos">
                Misa comunitaria - Solo domingos
              </option>
              <option value="Misa cantada">Misa cantada</option>
              <option value="Misa rezada con transmisión">
                Misa rezada con transmisión
              </option>
              <option value="Misa cantada con transmisión">
                Misa cantada con transmisión
              </option>
              <option value="Misa cantada campal">Misa cantada campal</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label>Fecha:</label>
            <input
              type="date"
              className="form-control"
              value={filtroFecha}
              onChange={(e) => setFiltroFecha(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Tabla de misas */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tipo de misa</th>
            <th>Nombres de difuntos</th>
            <th>Mensaje</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((misa, index) => (
              <tr key={index}>
                <td>{misa.tipoMisa}</td>
                <td>{misa.nombresDifuntos.join(', ')}</td>
                <td>{misa.mensaje}</td>
                <td>{misa.fecha}</td>
                <td>{misa.hora}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No se encontraron resultados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MisasAdmin;
