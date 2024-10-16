import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "../styles/Footer.css";
import $ from "jquery";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Inicializa Foundation una vez que el DOM esté cargado
    $(document).foundation();
  }, []);

  return (
    <footer className="marketing-site-footer">
      <div className="footer-container">
        {/* Columna de Horario de Atención */}
        <div className="footer-column">
          <h5 className="marketing-site-footer-name">Horario de Atención</h5>
          <p>Lunes a viernes: 9:30 am - 5:45 pm</p>
          <p>Sábado: 10:00 am - 5:00 pm</p>
          <p>Domingo y festivos: 11:00 am - 5:45 pm</p>
        </div>

        {/* Columna de Información de Contacto */}
        <div className="footer-column">
          <h5 className="marketing-site-footer-name">Información de Contacto</h5>
          <div className="marketing-site-footer-block">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <p>+57 3167924610</p>
          </div>
          <div className="marketing-site-footer-block">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <p>heladeria@gmail.com</p>
          </div>
          <div className="marketing-site-footer-block">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>Calle 23 #23-23</p>
          </div>
        </div>

        {/* Columna de Redes Sociales */}
        <div className="footer-column">
          <ul className="menu marketing-site-footer-menu-social simple">
            <li>
              <a href="#">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
