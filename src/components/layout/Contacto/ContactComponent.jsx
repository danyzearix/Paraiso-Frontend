import React from 'react';
import './ContactComponent.css';

const ContactComponent = () => {
    return (
        <div className="contact-container">
            <header>
                <img src="path_to_el_paraiso_logo.jpg" alt="El Paraíso Parque Cementerio" className="logo"/>
                {/* Agregar las opciones del menú aquí basadas en "INICIO", "PRODUCTOS", etc. */}
            </header>
            
            <main>
                <section className="contact-header">
                    <img src="path_to_woman_on_phone.jpg" alt="Atención al cliente" />
                    <h1>CONTACTO</h1>
                </section>

                <section className="contact-details">
                    <div className="phone-section">
                        <h2>TELÉFONOS</h2>
                        <p>+57 (1) 896 6280</p>
                        <p>Fax: +57 (1) 896 6284</p>
                        <p>Celular 24 horas: +57 320 276 3405</p>
                    </div>
                    <div className="email-section">
                        <h2>EMAIL</h2>
                        <p>pqr@elparaisoparquecementerio.com</p>
                        <p>cliente@elparaisoparquecementerio.com</p>
                    </div>
                    <div className="location-section">
                        <h2>UBICACIONES</h2>
                        <address>
                            OFICINA PRINCIPAL Y PARQUE CEMENTERIO<br/>
                            Kilómetro 15 Vía Autopista Medellín<br/>
                            OFICINA ADMINISTRATIVA Carrera 45 A No. 91-85 Bogotá D.C.
                        </address>
                    </div>
                </section>

                <section className="contact-form">
                    <h2>TE CONTÁCTAMOS</h2>
                    <form>
                        <label>
                            Nombre y apellido:
                            <input type="text" placeholder="Nombre" />
                        </label>
                        <label>
                            Celular:
                            <input type="tel" placeholder="Teléfono celular" />
                        </label>
                        <label>
                            Email:
                            <input type="email" placeholder="Email" />
                        </label>
                        <label>
                            Mensaje:
                            <textarea placeholder="Escribe por favor un mensaje o requerimiento"></textarea>
                        </label>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </main>

            <footer>
                <img src="path_to_el_paraiso_logo_footer.jpg" alt="El Paraíso Parque Cementerio" />
                {/* Información del footer aquí, basada en los detalles "Inicio", "Productos", etc. */}
            </footer>
        </div>
    );
};

export default ContactComponent;
