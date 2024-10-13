import React, { useEffect } from "react";
import $ from "jquery";
import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";

const Header = () => {
  useEffect(() => {
    // Inicializar Foundation solo cuando el componente se monte
    $(document).foundation();
  }, []);

  return (
    <div>
      <div
        className="orbit"
        role="region"
        aria-label="Favorite Space Pictures"
        data-orbit
      >
        <div className="orbit-wrapper">
          <div className="orbit-controls">
            <button className="orbit-previous">
              <span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;
            </button>
            <button className="orbit-next">
              <span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;
            </button>
          </div>
          <ul className="orbit-container">
            <li className="is-active orbit-slide">
              <figure className="orbit-figure">
                <img
                  className="orbit-image"
                  src="https://placehold.it/1200x600/999?text=Slide-1"
                  alt="Slide 1"
                />
                <figcaption className="orbit-caption">
                  Space, the final frontier.
                </figcaption>
              </figure>
            </li>
            <li className="orbit-slide">
              <figure className="orbit-figure">
                <img
                  className="orbit-image"
                  src="https://placehold.it/1200x600/888?text=Slide-2"
                  alt="Slide 2"
                />
                <figcaption className="orbit-caption">Let's Rocket!</figcaption>
              </figure>
            </li>
            <li className="orbit-slide">
              <figure className="orbit-figure">
                <img
                  className="orbit-image"
                  src="https://placehold.it/1200x600/777?text=Slide-3"
                  alt="Slide 3"
                />
                <figcaption className="orbit-caption">Encapsulating</figcaption>
              </figure>
            </li>
            <li className="orbit-slide">
              <figure className="orbit-figure">
                <img
                  className="orbit-image"
                  src="https://placehold.it/1200x600/666?text=Slide-4"
                  alt="Slide 4"
                />
                <figcaption className="orbit-caption">
                  Outta This World
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
        <nav className="orbit-bullets">
          <button className="is-active" data-slide="0">
            <span className="show-for-sr">First slide details.</span>
            <span className="show-for-sr" data-slide-active-label>
              Current Slide
            </span>
          </button>
          <button data-slide="1">
            <span className="show-for-sr">Second slide details.</span>
          </button>
          <button data-slide="2">
            <span className="show-for-sr">Third slide details.</span>
          </button>
          <button data-slide="3">
            <span className="show-for-sr">Fourth slide details.</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
