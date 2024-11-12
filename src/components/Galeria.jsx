import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "../styles/Galeria.css";
import $ from "jquery";
import { useEffect } from "react";

const Galeria = () => {
  useEffect(() => {
    $(document).foundation();
  }, []);

  return (
    <div className="gallery-container">
  <div className="gallery-header small-10 medium-8 large-7 columns text-center">
    <h2 className="gallery-title">Galería</h2>
    <p>Disfruta de los diferentes sabores y colores que te ofrecemos</p>
  </div>
  
  <div className="container-img">
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/Hg35pr1/4.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/3rwn5Nb/1.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/qWnMq3P/3.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/jJZyg2j/2.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/W6GWwRT/6.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/DVP1Yp2/11.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/hWmNRRZ/5.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/nkP7bsZ/7.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/C0QfCq3/10.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/ZWRNNpt/12.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/CWxT3vL/16.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/JKjHsxP/11.jpg" alt="img-galeria" />
    </figure>
  </div>
  <div className="box-img">
    <figure>
      <img src="https://i.ibb.co/8gF6d2M/14.jpg" alt="img-galeria" />
    </figure>
  </div>
</div>

  </div>

  );
};

export default Galeria;
