// ===============================
// App.jsx
// Main application component with routing
// ===============================

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import About from "./pages/About";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* ===============================
            Navigation Bar
            Simple top navigation with links
        =============================== */}
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/builder">Builder</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* ===============================
            Main Content
            Routes render the page components
        =============================== */}
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
