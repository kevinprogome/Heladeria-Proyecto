import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Headers from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Relevantes from "./components/Relevantes.jsx";
import Productos from "./components/Productos.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Api from "./components/Api.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Headers />
                <Relevantes />
              </>
            }
          />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/api" element={<Api />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
