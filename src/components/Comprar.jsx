import { useEffect } from "react";
import $ from "jquery";
import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";

const Comprar = () => {
  useEffect(() => {
    $(document).foundation();
  }, []);

  return (
    <div>
      <h1>hola</h1>
    </div>
  );
};

export default Comprar;
