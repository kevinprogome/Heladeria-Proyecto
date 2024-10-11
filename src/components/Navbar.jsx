import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "../styles/Navbar.css";
import Logo from "../img/logo.png";
import $ from "jquery";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    $(document).foundation();
  }, []);

  return (
    <div>
      <div
        className="title-bar"
        data-responsive-toggle="responsive-menu"
        data-hide-for="large"
      >
        <button
          className="menu-icon"
          type="button"
          data-toggle="responsive-menu"
        ></button>
        <div className="title-bar-title">Menu</div>
      </div>

      <div className="top-bar" id="responsive-menu">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">
              <a href="#">
                <img src={Logo} alt="Logo Heladería" />
              </a>
            </li>
            <li className="menu-left">
              <a className="link-12" href="#">
                INICIO
              </a>
            </li>
            <li className="menu-left">
              <a className="link-12" href="#">
                <span className="material-symbols-outlined">g_translate</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="dropdown menu" data-dropdown-menu>
            <li>
              <a className="link-12" href="#">
                PRODUCTO
              </a>
            </li>
            <li>
              <a className="link-12" href="#">
                NOSOTROS
              </a>
            </li>
            <li>
              <a className="link-12" href="#">
                GALERIA
              </a>
            </li>
            <li>
              <a className="link-12" href="#">
                API
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
