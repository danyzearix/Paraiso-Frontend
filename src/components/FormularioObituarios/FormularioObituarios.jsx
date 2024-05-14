import React, { Fragment, useState } from 'react';
import axios from 'axios';
import UploadFiles from '../UploadFiles/UploadFiles';
import "./FormularioObituarios.css"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const FormularioObituarios = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    velacion: '',
    exequias: '',
    hora: '',
    fecha: '',
    destino_final: '',
  });

  console.log(formData.fecha)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const MySwal = withReactContent(Swal);

const handleSubmit = async (event) => {
  event.preventDefault();

    // Hacer la solicitud POST a la ruta protegida en la API
    axios.post('https://paraiso-node-api-0c5186e80e32.herokuapp.com/api/obituarios', formData)
      .then(response => {
        console.log('Obituario guardado:', response.data);
        // Restablecer el formulario después de guardar exitosamente
        setFormData({
          nombre: '',
          velacion: '',
          exequias: '',
          hora: '',
          fecha: '',
          destino_final: '',
        });

        MySwal.fire({
          title: 'Éxito',
          text: 'Los datos han sido enviados correctamente',
          icon: 'success'
        });

      })
      .catch(error => {
        console.error('Error al guardar el obituario:', error);
        MySwal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar los datos',
          icon: 'error'
        });
      });


  };

  return (
    <Fragment>
  <div className='formObituarios-header'>
    <div className='formObituarios-title'>Subir obituarios</div>
     </div>
    <div className='formContainer'>
        <h2 className="margin-low">OBITUARIOS</h2>
        <form id="funeraria-form" className="mt-5" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombres">Nombre completo:</label>
            <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>
          <div className="form-group">
      <label htmlFor="lugarVelacion">Lugar de Velación:</label>
      <input 
          type="text" 
          className="form-control" 
          id="velacion" 
          name="velacion" 
          value={formData.velacion} 
          onChange={handleChange} 
          required 
      />
  </div>
          <div className="form-group">
            <label htmlFor="exequias">Exequias:</label>
            <input type="text" className="form-control" id="exequias" name="exequias" value={formData.exequias} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="hora">Hora:</label>
            <input type="time" className="form-control" id="hora" name="hora" value={formData.hora} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" className="form-control" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} required />
          </div>
          <div className="form-group">
    <label htmlFor="destinoFinal">Destino Final:</label>
    <input 
      type="text" 
      className="form-control" 
      id="destino_final" 
      name="destino_final" 
      value={formData.destino_final} 
      onChange={handleChange} 
      required 
    />
  </div>
          <button type="submit" className="btn btn-success mt-5 mb-5 form-button">Guardar</button>
        </form>
        <div className='upload-box'>
        <h2 className="text-center margin-low">SUBIR EN LOTE</h2>
        <UploadFiles/>
        </div>
      </div>

      </Fragment>
  );
};

export default FormularioObituarios;

