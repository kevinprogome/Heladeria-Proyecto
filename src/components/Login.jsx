import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "../styles/Login.css";
import $ from "jquery";
import { useEffect } from "react";
import Logo from "../img/heladeria.png"


const Nosotros = () => {
  useEffect(() => {
    $(document).foundation();
  }, []);

  return (
    <form>
      <div className="sign-in-form">
        <h4 className="text-center">Sign In</h4>
        <div className="logo-container-login">
                <img 
                    src={Logo} // Asegúrate de usar la ruta correcta a tu imagen
                    alt="Logo Heladería"
                    className="logo-img"
                />
            </div>
        <label htmlFor="sign-in-form-username">Username</label>
        <input type="text" className="sign-in-form-username" id="sign-in-form-username" />
        <label htmlFor="sign-in-form-password">Password</label>
        <input type="password" className="sign-in-form-password" id="sign-in-form-password" />
        <button type="submit" className="sign-in-form-button">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Nosotros;
