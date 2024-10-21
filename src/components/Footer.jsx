import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "../styles/Footer.css";
import $ from "jquery";
import { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'; // Iconos para contacto

const Footer = () => {
  useEffect(() => {
    // Inicializa Foundation una vez que el DOM esté cargado
    $(document).foundation();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Horario de atención */}
        <div className="footer-column">
          <h5>Horario de Atención</h5>
          <p>Lunes a viernes: 9:30 am a 5:45 pm</p>
          <p>Sábado: 10 am a 5 pm</p>
          <p>Domingo y festivos: 11 am a 5:45 pm</p>
        </div>
        
        {/* Información de contacto */}
        <div className="footer-column">
          <h5>Información de Contacto</h5>
          <div className="footer-contact">
            <FaPhone /> <p>+57 3167924610</p>
          </div>
          <div className="footer-contact">
            <FaEnvelope /> <p>heladeria@gmail.com</p>
          </div>
          <div className="footer-contact">
            <FaMapMarkerAlt /> <p>Calle 23 #23-23</p>
          </div>
          {/* Redes Sociales */}
          <div className="footer-social">
            <FaWhatsapp className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaFacebook className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
