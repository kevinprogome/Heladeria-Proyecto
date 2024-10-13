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
    <footer className="marketing-site-footer grid-container full">
      <div className="grid-x grid-margin-x">
        {/* Primera columna */}
        <div className="cell medium-6">
          <h4 className="marketing-site-footer-name">Yeti Snowcone</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            dolorem accusantium architecto id quidem, itaque nesciunt quam
            ducimus atque.
          </p>
          <ul className="menu marketing-site-footer-menu-social simple">
            <li>
              <a href="#">
                <i className="fa fa-youtube-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* Segunda columna */}
        <div className="cell medium-6">
          <h4 className="marketing-site-footer-title">Contact Info</h4>
          <div className="marketing-site-footer-block">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>
              100 W Rincon
              <br />
              San Francisco, CA 94015
            </p>
          </div>
          <div className="marketing-site-footer-block">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <p>1 (800) 555-5555</p>
          </div>
          <div className="marketing-site-footer-block">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <p>yetirules@fakeemail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
