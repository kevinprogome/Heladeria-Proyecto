import { useEffect } from "react";
import $ from "jquery";
import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "motion-ui/dist/motion-ui.min.css";
import "motion-ui/dist/motion-ui.min.js";
import "../styles/Api.css";

const Api = () => {
  useEffect(() => {
    function iniciarMap() {
      var coord = { lat: 2.9422, lng: -75.298376 };
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: coord,
      });
      var marker = new google.maps.Marker({
        position: coord,
        map: map,
      });
    }

    // Cargar el script de Google Maps
    const loadGoogleMapsScript = () => {
      const existingScript = document.getElementById("googleMaps");

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap`; // Tu API Key
        script.id = "googleMaps";
        document.body.appendChild(script);

        script.onload = () => {
          iniciarMap(); // Inicializa el mapa después de cargar el script
        };
      } else {
        iniciarMap(); // Si ya está cargado, solo inicializa el mapa
      }
    };

    loadGoogleMapsScript();
    $(document).foundation(); // Inicializar Foundation
  }, []);

  return (
    <div>
      <div id="map"></div>
    </div>
  );
};

export default Api;
