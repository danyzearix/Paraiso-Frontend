import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos, como enviarlos a una API
  };

  return (
    <div className="form-container">
      <h2 className="form-title" style={{ color: '#086B2C' }}>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Teléfono:</label>
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Producto de interés:</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" checked={selectedItems.includes('cenizariosCapillas')} onChange={() => handleCheckboxChange('cenizariosCapillas')} />
              Cenizarios en Capillas
            </label>
            <label>
              <input type="checkbox" checked={selectedItems.includes('cenizariosCapillas')} onChange={() => handleCheckboxChange('cenizariosCapillas')} />
              columbario en lote
            </label><label>
              <input type="checkbox" checked={selectedItems.includes('cenizariosCapillas')} onChange={() => handleCheckboxChange('cenizariosCapillas')} />
              lotes en propiedad
            </label><label>
              <input type="checkbox" checked={selectedItems.includes('cenizariosCapillas')} onChange={() => handleCheckboxChange('cenizariosCapillas')} />
              arbol cenizario
            </label><label>
              <input type="checkbox" checked={selectedItems.includes('cenizariosCapillas')} onChange={() => handleCheckboxChange('cenizariosCapillas')} />
              osarios en tierra
            </label><label>
              <input type="checkbox" checked={selectedItems.includes('cenizariosCapillas')} onChange={() => handleCheckboxChange('cenizariosCapillas')} />
              osarios en muro
            </label>
            {/* Repite el mismo patrón para los otros checkboxes */}
          </div>
        </div>
        <button type="submit" className="submit-button" style={{ backgroundColor: '#086B2C' }}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
