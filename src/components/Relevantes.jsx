import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import { useEffect } from "react";
import $ from "jquery";
import '../styles/Relevantes.css';

const Relevantes = () => {
  useEffect(() => {
    window.jQuery = $;
    window.$ = $;
    
    Foundation.addToJquery($);
    
    $(document).foundation();
  }, []);
  
  return (
    <div className="relevantes-container">
      <h1 className="titulo-grande">RELEVANTES</h1>
      <div className="ecommerce-product-slider orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
        <ul className="orbit-container">
          <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
          <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
          
          {/* Primer slide */}
          <li className="is-active orbit-slide">
            <div className="cards-container">
              {/* Carta 1 */}
              <div className="card">
                <div className="product-card-thumbnail">
                  <a href="#"><img src="https://placehold.it/300x300" alt="Product 1"/></a>
                </div>
                <h2 className="product-card-title"><a href="#">Product Name 1</a></h2>
                <span className="product-card-desc">Product Description 1</span>
                <span className="product-card-price">$9.99</span><span className="product-card-sale">$12.99</span>
              </div>

              {/* Carta 2 */}
              <div className="card">
                <div className="product-card-thumbnail">
                  <a href="#"><img src="https://placehold.it/300x300" alt="Product 2"/></a>
                </div>
                <h2 className="product-card-title"><a href="#">Product Name 2</a></h2>
                <span className="product-card-desc">Product Description 2</span>
                <span className="product-card-price">$14.99</span><span className="product-card-sale">$19.99</span>
              </div>

              {/* Carta 3 */}
              <div className="card">
                <div className="product-card-thumbnail">
                  <a href="#"><img src="https://placehold.it/300x300" alt="Product 3"/></a>
                </div>
                <h2 className="product-card-title"><a href="#">Product Name 3</a></h2>
                <span className="product-card-desc">Product Description 3</span>
                <span className="product-card-price">$29.99</span><span className="product-card-sale">$39.99</span>
              </div>
            </div>
          </li>
          
          {/* Segundo slide */}
          <li className="orbit-slide">
            <div className="cards-container">
              {/* Carta 4 */}
              <div className="card">
                <div className="product-card-thumbnail">
                  <a href="#"><img src="https://placehold.it/300x300" alt="Product 4"/></a>
                </div>
                <h2 className="product-card-title"><a href="#">Product Name 4</a></h2>
                <span className="product-card-desc">Product Description 4</span>
                <span className="product-card-price">$19.99</span><span className="product-card-sale">$24.99</span>
              </div>

              {/* Carta 5 */}
              <div className="card">
                <div className="product-card-thumbnail">
                  <a href="#"><img src="https://placehold.it/300x300" alt="Product 5"/></a>
                </div>
                <h2 className="product-card-title"><a href="#">Product Name 5</a></h2>
                <span className="product-card-desc">Product Description 5</span>
                <span className="product-card-price">$24.99</span><span className="product-card-sale">$29.99</span>
              </div>

              {/* Carta 6 */}
              <div className="card">
                <div className="product-card-thumbnail">
                  <a href="#"><img src="https://placehold.it/300x300" alt="Product 6"/></a>
                </div>
                <h2 className="product-card-title"><a href="#">Product Name 6</a></h2>
                <span className="product-card-desc">Product Description 6</span>
                <span className="product-card-price">$34.99</span><span className="product-card-sale">$39.99</span>
              </div>
            </div>
          </li>
        </ul>
        <nav className="orbit-bullets">
          <button className="is-active" data-slide="0"><span className="show-for-sr">First slide details.</span><span className="show-for-sr">Current Slide</span></button>
          <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
        </nav>
      </div>
    </div>
  );
};

export default Relevantes;
