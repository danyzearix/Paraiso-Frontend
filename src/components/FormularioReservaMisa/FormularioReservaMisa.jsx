import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es'; // Importar el locale español
import Swal from 'sweetalert2'; // Importar SweetAlert2
import './FormularioReservaMisa.css';

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
  const [mensaje, setMensaje] = useState('');
  const [horarios, setHorarios] = useState([]);
  const [metodoPago, setMetodoPago] = useState('');

  const obtenerHorariosDisponibles = async (misaId) => {
    try {
      const respuesta = await fetch(`http://localhost:3000/api/horarios/${misaId}`);
      const data = await respuesta.json();
      setHorarios(data);
    } catch (error) {
      console.error("Error al obtener los horarios disponibles:", error);
    }
  };

  const manejarCambioServicio = (e) => {
    const nuevoServicio = e.target.value;
    setServicio(nuevoServicio);
    if (nuevoServicio === "Misa rezada") {
      obtenerHorariosDisponibles("67621402fda71854295879e4"); // ID de la misa rezada
    } else {
      setHorarios([]);
    }
  };

  const esFechaDisponible = (date) => {
    if (!horarios.length) return false;
    const fechaSeleccionada = date.toISOString().split('T')[0];
    return horarios.some((horario) => horario.fecha.startsWith(fechaSeleccionada));
  };

  const filtrarHora = (time) => {
    if (!fecha || horarios.length === 0) return false;
    const horaSeleccionada = time.getHours();
    const minutosSeleccionados = time.getMinutes();
    const fechaCompleta = new Date(fecha);
    fechaCompleta.setHours(horaSeleccionada, minutosSeleccionados);
    return horarios.some((horario) => {
      const fechaHorario = new Date(horario.fecha);
      return fechaCompleta.getTime() === fechaHorario.getTime();
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    if (!servicio || !fecha || !email || !nombreComprador || !celular || !tipoIdentificacion || !numerodocumento || !metodoPago) {
      Swal.fire('Error', 'Por favor, completa todos los campos obligatorios.', 'error');
      return;
    }

    // Obtener el horario seleccionado
    const horarioSeleccionado = horarios.find((horario) => {
      const fechaHorario = new Date(horario.fecha);
      return fechaHorario.getTime() === fecha.getTime();
    });

    if (!horarioSeleccionado) {
      Swal.fire('Error', 'El horario seleccionado no está disponible.', 'error');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/horarios/${horarioSeleccionado._id}/reservar`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usuarioId: numerodocumento, // Aquí usamos el número de documento como ID temporal
          nombre: nombreComprador,
          email: email,
          metodoPago: metodoPago,
          monto: 120000 // Puedes ajustar esto según el servicio
        })
      });
      

      const result = await response.json();
      if (response.ok) {
        Swal.fire('¡Reservado!', 'Tu reserva ha sido confirmada.', 'success');
      } else {
        Swal.fire('Error', result.message || 'No se pudo reservar el horario.', 'error');
      }
    } catch (error) {
      console.error("Error al enviar la reserva:", error);
      Swal.fire('Error', 'Hubo un problema al reservar la misa.', 'error');
    }
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
                <select
                  className="form-control"
                  value={servicio}
                  onChange={manejarCambioServicio}
                  required
                >
                  <option value="" disabled>Selecciona un servicio</option>
                  <option value="Misa rezada">Misa rezada</option>
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
                    timeIntervals={60}
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
                <label className="form-label">Nombre y apellido:</label>
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

              <div className="form-group">
                <label className="form-label">Número del documento:</label>
                <input
                  type="text"
                  className="form-control"
                  value={numerodocumento}
                  onChange={(e) => setNumerodocumento(e.target.value)}
                  required
                  placeholder="Número de documento"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Método de pago:</label>
                <select
                  className="form-control"
                  value={metodoPago}
                  onChange={(e) => setMetodoPago(e.target.value)}
                  required
                >
                  <option value="" disabled>Selecciona un método de pago</option>
                  <option value="Tarjeta">Tarjeta</option>
                  <option value="Efectivo">Efectivo</option>
                </select>
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

