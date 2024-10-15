import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import Navbar from "./components/Navbar.jsx";
import Headers from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Relevantes from "./components/Relevantes.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Headers />
      <Relevantes />
      <Footer />
    </div>
  );
}

export default App;
