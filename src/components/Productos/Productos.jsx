import React from 'react'
import "./Productos.css"
import Form from '../layout/Form/Form';
import { FaPhone } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineFileText, AiOutlineDollarCircle, AiOutlineRead, AiOutlineCompass, AiOutlineMail } from 'react-icons/ai';

const Productos = () => {

  return (
    <div className="productos">
      <div className="productos-header">
        <h1 className="productos-title">Nuestros Productos</h1>
      </div>
      <div className="productos">
      <div className="productos-content">
        <div className="text-section" id="cenizarios">
          <h1 className="title_Productos">Cenizarios en Capilla</h1>
          <p className="paragraph">Espacio en madera, con capacidad para albergar desde 1 a 4 cenizas, en propiedad a perpetuidad con tapa en cristal ubicados en el sótano de la capilla, con placa memorial y asistencia religiosa durante el servicio de inhumación de las cenizas.</p>
          <a href="https://wa.link/lno0xh"><button className='productosButton'> Más información 📲 </button></a>
          
        </div>
        <div className="image-section">
        <img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/cenizarios-capilla-1-scaled.jpg" alt="Imagen de producto" className="product-image" />
        </div>
      </div>

      <div className="productos-content">
        <div className="text-section">
          <h1 className="title_Productos" id='cenizarios-muro'>Cenizarios en Muro</h1>
          <p className="paragraph">Espacio en muro a un costado de la sección de bóvedas, con capacidad para albergar 1 ó 2 cenizas, o unidades familiares para albergar hasta 8 cenizas en propiedad a perpetuidad. Placa memorial en mármol y asistencia religiosa durante el servicio de inhumación de las cenizas.</p>
          <a href="https://wa.link/lno0xh"><button className='productosButton'> Más información 📲 </button></a>
        </div>
        <div className="image-section">
        <img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/cenizarios-muro-1-scaled.jpg" alt="Imagen de producto" className="product-image" />
        </div>
      </div>
    </div>

    <div className="productos-content">
        <div className="text-section" id='osarios-muro'>
          <h1 className="title_Productos" >Osarios en Muro</h1>
          <p className="paragraph">Espacio en muro a un costado de la sección de bóvedas, con capacidad para albergar un unos (1) restos humanos ó dos cenizas en propiedad a perpetuidad, placa memorial en mármol y asistencia religiosa durante el servicio de inhumación de los restos ó cenizas</p>
          <a href="https://wa.link/lno0xh"><button className='productosButton'> Más información 📲 </button></a>
        </div>
        <div className="image-section">
        <img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/osarios-muro-1.jpg" alt="Imagen de producto" className="product-image" />
        </div>
      </div>

      <div className="productos-content">
        <div className="text-section">
          <h1 className="title_Productos">Osarios en tierra</h1>
          <p className="paragraph">Espacio en tierra con capacidad para albergar cuatro cenizas ó dos restos humanos ó unos restos humanos y dos cenizas, también contamos con osarios familiares en tierra con capacidad para albergar 3 restos ó 9 cenizas, buscando así conservar la unión familiar, en propiedad a perpetuidad. Placa memorial en mármol y asistencia religiosa durante el servicio de inhumación, de los restos ó cenizas.</p>
          <a href="https://wa.link/lno0xh"><button className='productosButton'> Más información 📲 </button></a>
        </div>
        <div className="image-section">
        <img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/Osario-1.png" alt="Imagen de producto" className="product-image" />
        </div>
      </div>

      <div className="productos-content">
        <div className="text-section">
          <h1 className="title_Productos">Arbol cenizario</h1>
          <p className="paragraph">Árbol familiar, con capacidad para albergar bajo tierra cuatro cenizas a su alrededor, en propiedad a perpetuidad. Placa memorial en mármol y asistencia religiosa durante el servicio de inhumación de las cenizas.</p>
          <a href="https://wa.link/lno0xh"><button className='productosButton'> Más información 📲 </button></a>
        </div>
        <div className="image-section">
        <img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/arbol-cenizario-1.jpg" alt="Imagen de producto" className="product-image" />
        </div>
      </div>

      <div className="productos-content">
        <div className="text-section">
          <h1 className="title_Productos">Lotes en propiedad</h1>
          <p className="paragraph">Espacio en tierra en propiedad en donde se inhumara un cuerpo, a perpetuidad con capacidad de albergar dos o tres cuerpos, para responder así de manera efectiva frente a sus necesidades, estos lotes son dobles o triples.</p>
          <p className="paragraphIdent">
            <img src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/03/funerario-ico.png" width={64} className="icon"/> <span>Que ofrecemos?</span>
            
          </p>
          <p className="paragraphIdent">DOBLE: En propiedad a perpetuidad que comprende un lote tumba con capacidad para albergar dos cuerpos humanos a profundidad. <br/>
TRIPLE: En propiedad a perpetuidad, que comprende un lote tumba con capacidad para albergar tres cuerpos humanos a profundidad. <br/>
LOTE INTEGRAL: En propiedad a perpetuidad doble o triple e incluye servicio de inhumación y derecho de cementerio para los dos o tres espacios de el lote.</p>
        </div>
        <div className="image-section">
        <img src="https://paraisocementerio.a2hosted.com/wp-content/uploads/2024/01/lotes-prop.jpg" alt="Imagen de producto" className="product-image" />
        </div>
      </div>

      <div className="productos-content">
        <div className="text-section">
          <h1 className="title_Productos">Columbario en lote</h1>
          <p className="paragraph">Como valor agregado a estos lotes, se pueden construir dos columbarios en la cabecera de el lote con capacidad para albergar tres cenizas cada uno, quedando así un lote propio para 8 o 9 personas ocupado con dos o tres cuerpos y tres o seis cenizas.</p>
          <a href="https://wa.link/lno0xh"><button className='productosButton'> Más información 📲 </button></a>
        </div>
        <div className="image-section">
        <img src="https://media.istockphoto.com/id/1413834626/es/foto/columbario-y-flores.jpg?s=612x612&w=0&k=20&c=oQzCH3iwSx9FVqG3EFSa-oSYEP8DmzGhePucjxeoSa0=" alt="Imagen de producto" className="product-image" />
        </div>
      </div>
    </div>
  )
}

export default Productos