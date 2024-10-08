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
        Delete Vidarte jeje
      </button>

      <a class="button tiny" href="#">
        So Tiny
      </a>
      <a class="button small" href="#">
        So Small
      </a>
      <a class="button" href="#">
        So Basic
      </a>
      <a class="button large" href="#">
        So Large
      </a>
      <a class="button expanded" href="#">
        Such Expand
      </a>
      <a class="button small expanded" href="#">
        Wow, Small Expand
      </a>
    </div>
  );
}

export default App;
