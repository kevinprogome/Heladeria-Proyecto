import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "../styles/Galeria.css";
import $ from "jquery";
import { useEffect } from "react";

const Galeria = () => {
  useEffect(() => {
    // Inicializa Foundation una vez que el DOM esté cargado
    $(document).foundation();
  }, []);

  return (
    <div className="featured-image-block-grid">
      <div className="featured-image-block-grid-header small-10 medium-8 large-7 columns text-center">
        <h2>Galeria De Nuestros Productos</h2>
        <p>Helados.</p>
      </div>
      <div className="row large-up-4 small-up-2">
        <div className="featured-image-block column">
          <a href="#">
            <img src="https://unsplash.it/600/440?image=899" />
            <p className="text-center featured-image-block-title">New York</p>
          </a>
        </div>

        <div className="featured-image-block column">
          <a href="#">
            <img src="https://unsplash.it/600/440?image=693" />
            <p className="text-center featured-image-block-title">
              San Francisco
            </p>
          </a>
        </div>

        <div className="featured-image-block column">
          <a href="#">
            <img src="https://unsplash.it/600/440?image=452" />
            <p className="text-center featured-image-block-title">Las Vegas</p>
          </a>
        </div>

        <div className="featured-image-block column">
          <a href="#">
            <img src="https://unsplash.it/600/440?image=792" />
            <p className="text-center featured-image-block-title">Sacramento</p>
          </a>
        </div>

        <div className="featured-image-block column">
          <a href="#">
            <img src="https://unsplash.it/600/440?image=667" />
            <p className="text-center featured-image-block-title">
              Los Angeles
            </p>
          </a>
        </div>

        <div className="featured-image-block column">
          <a href="#">
            <img src="https://unsplash.it/600/440?image=249" />
            <p className="text-center featured-image-block-title">Chicago</p>
          </a>
        </div>

        <div className="featured-image-block column">
          <a href="#">
            <img src="https://unsplash.it/600/440?image=382" />
            <p className="text-center featured-image-block-title">Boston</p>
          </a>
        </div>

        <div className="featured-image-block column">
          <a href="#">
            <img src="https://unsplash.it/600/440?image=1075" />
            <p className="text-center featured-image-block-title">Seattle</p>
          </a>
        </div>
        <div className="featured-image-block column">
          <a href="#">
            <img src="https://unsplash.it/600/440?image=1075" />
            <p className="text-center featured-image-block-title">Seattle</p>
          </a>
        </div>
        <div className="featured-image-block column">
          <a href="#">
            <img src="https://unsplash.it/600/440?image=1075" />
            <p className="text-center featured-image-block-title">Seattle</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
