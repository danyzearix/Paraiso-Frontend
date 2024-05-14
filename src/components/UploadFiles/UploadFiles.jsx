import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const UploadFiles = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const MySwal = withReactContent(Swal);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      MySwal.fire({
        title: 'Por favor selecciona un archivo',
        text: 'Ningún archivo ha sido seleccionado para subir.',
        icon: 'warning',
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://paraiso-node-api-0c5186e80e32.herokuapp.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      MySwal.fire({
        title: '¡Éxito!',
        text: 'Archivo subido correctamente',
        icon: 'info',
      });
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      MySwal.fire({
        title: 'Error',
        text: 'Error al subir el archivo: ' + error.response.data.message,
        icon: 'error',
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} accept=".xlsx" name="file" />
      <button className="margin-up" onClick={handleFileUpload}>Subir Archivo</button>
    </div>
  );
};

export default UploadFiles;
