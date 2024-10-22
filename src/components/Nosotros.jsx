import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "../styles/Nosotros.css";
import $ from "jquery";
import { useEffect } from "react";
import Logo from "../img/heladeria.png"

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
                    Ofrecer a nuestros clientes una experiencia única a través de helados artesanales elaborados con ingredientes frescos y naturales, inspirados en la rica biodiversidad y la cultura colombiana. Nos comprometemos a brindar un servicio excepcional y a crear momentos de alegría en cada visita.
                </p>
                <h2 className="subtitulos">Visión</h2>
                <p className="letra-parrafo-1">
                    Ser la heladería preferida en Colombia, reconocida por la calidad y la innovación de nuestros productos, contribuyendo al desarrollo sostenible de la comunidad y promoviendo el consumo responsable. Aspiramos a expandir nuestra presencia a nivel nacional, compartiendo el sabor y la diversidad de nuestros helados con cada rincón del país
                </p>
            </div>
        </div>
    );
}

export default Nosotros;
