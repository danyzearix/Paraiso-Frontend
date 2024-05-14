import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './EditarObituarios.css';

const EditarObituarios = () => {
  const [obituarios, setObituarios] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroFecha, setFiltroFecha] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://paraiso-node-api-0c5186e80e32.herokuapp.com/api/obituarios')
      .then((response) => {
        setObituarios(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API:', error);
        setError('Error al obtener los datos. Por favor, inténtelo de nuevo más tarde.');
        setLoading(false);
      });
  }, []);

  const handleChangeNombre = (event) => {
    setFiltroNombre(event.target.value);
  };

  const handleChangeFecha = (event) => {
    setFiltroFecha(event.target.value);
  };

  const filtrarPorNombre = (obituario) => {
    if (!filtroNombre) return true;
    return obituario.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
  };

  const filtrarPorFecha = (obituario) => {
    if (!filtroFecha) return true;
    return obituario.fecha === filtroFecha;
  };

  const handleEdit = (obituario) => {
    Swal.fire({
      title: 'Editar Obituario',
      html: `
        <input type="text" id="nombre" class="swal2-input" value="${obituario.nombre}" placeholder="Nombre completo">
        <input type="text" id="velacion" class="swal2-input" value="${obituario.velacion}" placeholder="Lugar de Velación">
        <input type="text" id="exequias" class="swal2-input" value="${obituario.exequias}" placeholder="Exequias">
        <input type="time" id="hora" class="swal2-input" value="${obituario.hora}" placeholder="Hora">
        <input type="date" id="fecha" class="swal2-input" value="${obituario.fecha}" placeholder="Fecha">
        <input type="text" id="destino_final" class="swal2-input" value="${obituario.destino_final}" placeholder="Destino Final">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          nombre: document.getElementById('nombre').value,
          velacion: document.getElementById('velacion').value,
          exequias: document.getElementById('exequias').value,
          hora: document.getElementById('hora').value,
          fecha: document.getElementById('fecha').value,
          destino_final: document.getElementById('destino_final').value,
        };
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedObituario = {
          ...obituario,
          ...result.value
        };

        axios.put(`https://paraiso-node-api-0c5186e80e32.herokuapp.com/api/obituarios/${obituario._id}`, updatedObituario)
          .then((response) => {
            Swal.fire('Guardado!', 'El obituario ha sido actualizado.', 'success');
            setObituarios(obituarios.map((item) => (item._id === obituario._id ? response.data : item)));
          })
          .catch((error) => {
            Swal.fire('Error!', 'Hubo un problema al guardar los cambios.', 'error');
          });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://paraiso-node-api-0c5186e80e32.herokuapp.com/api/obituarios/${id}`)
          .then(() => {
            Swal.fire('Eliminado!', 'El obituario ha sido eliminado.', 'success');
            setObituarios(obituarios.filter((item) => item._id !== id));
          })
          .catch((error) => {
            Swal.fire('Error!', 'Hubo un problema al eliminar el obituario.', 'error');
          });
      }
    });
  };

  const obituariosFiltrados = obituarios.filter(filtrarPorNombre).filter(filtrarPorFecha);

  if (loading) {
    return <h3>Cargando...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <Fragment>
      <div className='formObituarios-header'>
        <div className='formObituarios-title'>Editar Obituarios</div>
      </div>
      <div className='formContainer'>
        <div className="filters">
          <input
            type="text"
            placeholder="Filtrar por nombre"
            value={filtroNombre}
            onChange={handleChangeNombre}
          />
        </div>
        <div className="filters">
          <input
            type="date"
            placeholder="Filtrar por fecha"
            value={filtroFecha}
            onChange={handleChangeFecha}
          />
        </div>
        <div className="grid">
          {obituariosFiltrados.map((obituario) => (
            <div className="grid-item" key={obituario._id}>
              <h3 className="nombrePersona">{obituario.nombre} (Q.E.P.D)</h3>
              <p>VELACIÓN: {obituario.velacion}</p>
              <p>EXEQUIAS: {obituario.exequias}</p>
              <p>HORA: {obituario.hora}</p>
              <p>FECHA: {obituario.fecha}</p>
              <p>DESTINO FINAL: {obituario.destino_final}</p>
              <button className="btn btn-edit" onClick={() => handleEdit(obituario)}>Editar</button>
              <button className="btn btn-delete" onClick={() => handleDelete(obituario._id)}>Eliminar</button>
            </div>
          ))}
          {obituariosFiltrados.length === 0 && (
            <h3>No se encontraron obituarios con los criterios de búsqueda.</h3>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default EditarObituarios;

