import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">LOGO</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <a className="link-12" href="#">
                INICIO
              </a>
            </li>
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
            <li>
              <a className="link-12" href="#">
                <span class="material-symbols-outlined">g_translate</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
