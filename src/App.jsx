import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";

function App() {
  return (
    <div>
      <a href="about.html" className="button">
        Learn More
      </a>
      <a href="#features" className="button">
        View All Features
      </a>

      <button className="submit success button">Save</button>
      <button type="button" className="alert button">
        Delete
      </button>
    </div>
  );
}

export default App;
