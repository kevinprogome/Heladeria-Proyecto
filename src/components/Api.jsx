import { useEffect } from "react";
import $ from "jquery";
import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "motion-ui/dist/motion-ui.min.css";
import "motion-ui/dist/motion-ui.min.js";
import "../styles/Api.css";

const Api = () => {
  useEffect(() => {
    $(document).foundation(); // Inicializar Foundation
  }, []);

  return (
    <div>
      <div className="Container">
        <h1>Ubícanos</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127505.9120582599!2d-75.38091886093754!3d2.9419992000000073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b74f438bb0299%3A0x3d63073da14eebf7!2sUniversidad%20Surcolombiana%20-%20Sede%20Central!5e0!3m2!1ses-419!2sco!4v1729395802428!5m2!1ses-419!2sco"
          className="styled-map"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div>
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: 360, height: 800 }}
            data-ad-client="ca-pub-7276530423877891"
            data-ad-slot="2240645442"
          ></ins>
        </div>
      </div>
    </div>
  );
};

export default Api;
