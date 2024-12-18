import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es'; // Importar el locale español
import Swal from 'sweetalert2'; // Importar SweetAlert2
import './FormularioReservaMisa.css'

// Registrar el locale español
registerLocale('es', es);

const FormularioReservaMisa = () => {
  const [servicio, setServicio] = useState('');
  const [fecha, setFecha] = useState(null);
  const [email, setEmail] = useState('');
  const [nombreComprador, setnombreComprador] = useState('');
  const [celular, setCelular] = useState('');
  const [tipoIdentificacion, setTipoIdentificacion] = useState('');
  const [numerodocumento, setNumerodocumento] = useState('');
  const [destinatarios, setDestinatarios] = useState(['', '', '', '', '']);
  const [mensaje, setMensaje] = useState('');

  // Función para verificar si la fecha es válida según el servicio seleccionado
  const esFechaDisponible = (date) => {
    const dia = date.getDay(); // Domingo = 0, Lunes = 1, ..., Sábado = 6

    if (servicio !== "Misa rezada") {
      return false;
    }

    // Para "Misa rezada", los días permitidos son de lunes a viernes
    if (dia === 0 || dia === 6) {
      return false;
    }

    return true;
  };

  // Función para filtrar las horas disponibles según el día
  const filtrarHora = (time) => {
    if (!fecha) {
      return false;
    }

    const fechaSeleccionada = fecha;
    const dia = fechaSeleccionada.getDay();

    const hora = time.getHours();
    const minutos = time.getMinutes();

    const horaFecha = new Date(fechaSeleccionada);
    horaFecha.setHours(hora);
    horaFecha.setMinutes(minutos);

    let rangosPermitidos = [];

    if (dia === 1 || dia === 2 || dia === 4) {
      rangosPermitidos.push({ inicio: 9, fin: 16 });
    } else if (dia === 3) {
      rangosPermitidos.push({ inicio: 9, fin: 10 });
      rangosPermitidos.push({ inicio: 11, fin: 16 });
    } else if (dia === 5) {
      rangosPermitidos.push({ inicio: 9, fin: 15 });
    } else {
      return false;
    }

    for (let rango of rangosPermitidos) {
      const horaInicio = new Date(fechaSeleccionada);
      horaInicio.setHours(rango.inicio, 0, 0);
      const horaFin = new Date(fechaSeleccionada);
      horaFin.setHours(rango.fin, 0, 0);

      if (horaFecha >= horaInicio && horaFecha < horaFin) {
        return true;
      }
    }

    return false;
  };

  const agregarDestinatario = () => {
    if (destinatarios.length < 10) {
      setDestinatarios([...destinatarios, '']);
    }
  };

  const manejarCambioDestinatario = (index, valor) => {
    const nuevosDestinatarios = [...destinatarios];
    nuevosDestinatarios[index] = valor;
    setDestinatarios(nuevosDestinatarios);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!servicio || !fecha || !email || !celular || !tipoIdentificacion || !numerodocumento || !mensaje) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const resumenDatos = `
      <strong>Servicio:</strong> ${servicio}<br>
      <strong>Fecha y hora:</strong> ${fecha.toLocaleString()}<br>
      <strong>Correo electrónico:</strong> ${email}<br>
      <strong>Número de celular:</strong> ${celular}<br>
      <strong>Tipo de identificación:</strong> ${tipoIdentificacion}<br>
      <strong>Número de documento:</strong> ${numerodocumento}<br>
      <strong>Destinatarios:</strong> ${destinatarios.filter(d => d).join(', ')}<br>
      <strong>Mensaje:</strong> ${mensaje}
    `;

    Swal.fire({
      title: 'Confirmar Reserva',
      html: resumenDatos,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Reservado!', 'Tu reserva ha sido confirmada.', 'success');
      }
    });
  };

  return (
    <div>
      <div className='headerContainer'>
        <h1 className="text-center mb-4">RESERVAR MISAS</h1>
      </div>
      <div className="formContainer">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form onSubmit={manejarEnvio}>
              <div className="form-group">
                <label className="form-label">Selecciona un servicio:</label>
                <select className="form-control" value={servicio} onChange={(e) => setServicio(e.target.value)} required>
                  <option value="" disabled>Selecciona un servicio</option>
                  <option value="Misa rezada">Misa rezada</option>
                  <option value="Misa comunitaria - Solo domingos">Misa comunitaria - Solo domingos</option>
                  <option value="Misa cantada">Misa cantada</option>
                  <option value="Misa rezada con transmisión">Misa rezada con transmisión</option>
                  <option value="Misa cantada con transmisión">Misa cantada con transmisión</option>
                  <option value="Misa cantada campal">Misa cantada campal</option>
                </select>
              </div>

              {servicio === "Misa rezada" && (
                <div className="form-group">
                  <label className="form-label">Selecciona fecha y hora:</label>
                  <DatePicker
                    selected={fecha}
                    onChange={(date) => setFecha(date)}
                    showTimeSelect
                    filterDate={esFechaDisponible}
                    filterTime={filtrarHora}
                    dateFormat="Pp"
                    placeholderText="Selecciona fecha y hora"
                    className="form-control"
                    required
                    locale="es"
                  />
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Correo electrónico:</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Correo electrónico"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Nombre y apellido </label>
                <input
                  type="text"
                  className="form-control"
                  value={nombreComprador}
                  onChange={(e) => setnombreComprador(e.target.value)}
                  required
                  placeholder="Nombre del comprador"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Número de celular:</label>
                <input
                  type="tel"
                  className="form-control"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                  required
                  placeholder="Número de celular"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Tipo de identificación:</label>
                <select
                  className="form-control"
                  value={tipoIdentificacion}
                  onChange={(e) => setTipoIdentificacion(e.target.value)}
                  required
                >
                  <option value="" disabled>Selecciona tipo de identificación</option>
                  <option value="CC">CC</option>
                  <option value="TI">TI</option>
                  <option value="CE">CE</option>
                  <option value="PASAPORTE">PASAPORTE</option>
                </select>
              </div>

              <div className='form-group'>
                <label className='form-label'>Número del documento</label>
                <input 
                  type="text" 
                  className='form-control'
                  value={numerodocumento}
                  onChange={(e) => setNumerodocumento(e.target.value)}
                  required
                  placeholder='Número de documento'
                />
              </div>

              <div className="form-group">
                <label className="form-label">Nombre y apellido a quien va dirigida la misa:</label>
                {destinatarios.map((destinatario, index) => (
                  <input
                    key={index}
                    type="text"
                    className="form-control mb-2"
                    value={destinatario}
                    onChange={(e) => manejarCambioDestinatario(index, e.target.value)}
                    placeholder={`Nombre ${index + 1}`}
                  />
                ))}
                {destinatarios.length < 10 && (
                  <button type="button" className="btn btn-secondary mt-2 btn-center" onClick={agregarDestinatario}>
                    Agregar nombres
                  </button>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Nombre o nombres de quien ofrece la misa</label>
                <textarea
                  className="form-control textarea-grande"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  maxLength={250}
                  placeholder="Máximo 250 caracteres"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">Mensaje o intención</label>
                <textarea
                  className="form-control textarea-grande"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  maxLength={250}
                  placeholder="Máximo 250 caracteres"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block mt-3 btn-center">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioReservaMisa;
