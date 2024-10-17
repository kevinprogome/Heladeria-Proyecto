import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import { useEffect } from "react";
import $ from "jquery";
import '../styles/Productos.css';
import Vainilla from "../img/helado_vainilla.jpeg";
import Chocolate from "../img/helado_chocolate.jpeg"
import Fresa from "../img/helado_fresa.jpeg"
import Menta from "../img/helado_menta.jpeg"
import Caramelo from "../img/helado_caramelo.jpeg"
import Cafe from "../img/helado_cafe.jpeg"


const Productos = () => {
  useEffect(() => {
    window.jQuery = $;
    window.$ = $;
    
    Foundation.addToJquery($);
    
    $(document).foundation();
  }, []);
  
  return (
<div className="grid-container">
  <div className="grid-x grid-margin-x small-up-2 medium-up-3">
    <div className="cell product-card">
      <div className="product-card-thumbnail">
        <a href="#"><img src={Vainilla} alt="Vainilla Clásica" /></a>
      </div>
      <h2 className="product-card-title">Vainilla Clásica</h2>
      <span className="product-card-desc">Helado cremoso de vainilla con auténtica vaina de vainilla, perfecto para quienes disfrutan de los sabores tradicionales.</span>
      <span className="product-card-price">$6.500</span>
    </div>
    <div className="cell product-card">
      <div className="product-card-thumbnail">
        <a href="#"><img src={Chocolate} alt="Chocolate Oscuro" /></a>
      </div>
      <h2 className="product-card-title">Chocolate Oscuro</h2>
      <span className="product-card-desc">Helado de chocolate intenso y rico, hecho con cacao oscuro para un sabor profundo y decadente.</span>
      <span className="product-card-price">$7.000</span>
    </div>
    <div className="cell product-card">
      <div className="product-card-thumbnail">
        <a href="#"><img src={Fresa} alt="Fresa Natural" /></a>
      </div>
      <h2 className="product-card-title">Fresa Natural</h2>
      <span className="product-card-desc">Helado refrescante hecho con fresas frescas, ideal para los amantes de los sabores frutales y naturales.</span>
      <span className="product-card-price">$6.800</span>
    </div>
    <div className="cell product-card">
      <div className="product-card-thumbnail">
        <a href="#"><img src={Menta} alt="Menta con Chips de Chocolate" /></a>
      </div>
      <h2 className="product-card-title">Menta con Chips de Chocolate</h2>
      <span className="product-card-desc">Helado de menta fresca con trozos de chocolate crujiente, una combinación clásica y refrescante.</span>
      <span className="product-card-price">$7.200</span>
    </div>
    <div className="cell product-card">
      <div className="product-card-thumbnail">
        <a href="#"><img src={Caramelo} alt="Caramelo Salado" /></a>
      </div>
      <h2 className="product-card-title">Caramelo Salado</h2>
      <span className="product-card-desc">Helado cremoso con un toque de caramelo salado, que combina lo dulce y lo salado en cada bocado.</span>
      <span className="product-card-price">$7.500</span>
    </div>
    <div className="cell product-card">
      <div className="product-card-thumbnail">
        <a href="#"><img src={Cafe} alt="Café Espresso" /></a>
      </div>
      <h2 className="product-card-title">Café Espresso</h2>
      <span className="product-card-desc">Helado con un sabor intenso a café, perfecto para los amantes del café que buscan un postre energético y delicioso.</span>
      <span className="product-card-price">$7.000</span>
    </div>
  </div>
</div>

  );
};

export default Productos;
