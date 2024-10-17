import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "../styles/Nosotros.css";
import $ from "jquery";
import { useEffect } from "react";
import Logo from "../img/icono.png"

const Nosotros = () => {
    useEffect(() => {
        $(document).foundation();
    }, []);

    return (
        <div className="app-container">
            <h1 className="titulo-grande">Nosotros</h1>
            <div className="logo-container">
                <img 
                    src={Logo} // Asegúrate de usar la ruta correcta a tu imagen
                    alt="Logo Heladería"
                    className="logo-img"
                />
            </div>
            <div className="mission-vision-container">
                <h2 className="subtitulos">Misión</h2>
                <p className="letra-parrafo-1">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <h2 className="subtitulos">Visión</h2>
                <p className="letra-parrafo-1">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </div>
    );
}

export default Nosotros;
