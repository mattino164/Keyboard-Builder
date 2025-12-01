// client/src/pages/Home.jsx

import "../styles/Home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

/**
 * Home Page
 * Displays a hero section with call-to-action, features overview,
 * and example keyboard builds.
 */
export default function Home() {
  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="main-heading">
            Build Your Dream <span className="highlight">Keyboard</span>
          </h1>
          <p className="subheading">
            Design. Customize. Create. Make it truly yours.
          </p>
          <Link to="/builder" className="cta-button">
            Start Building
          </Link>
        </div>

        <div className="divider" />

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <h3>Fully Customizable</h3>
            <p>
              Pick every part from switches to cables and create your setup your
              way.
            </p>
          </div>
          <div className="feature-card">
            <h3>Live Preview</h3>
            <p>Watch your keyboard come to life instantly as you build.</p>
          </div>
          <div className="feature-card">
            <h3>Accurate Pricing</h3>
            <p>Stay on budget with real-time price tracking for all parts.</p>
          </div>
        </section>

        <div className="divider" />

        {/* Showcase Section */}
        <section className="showcase">
          <h2>Example Builds</h2>
          <div className="showcase-gallery">
            <div className="showcase-item">
              <img src="/assets/keyboards/minimalist.png" alt="Minimalist" />
              <p>Minimalist Black</p>
            </div>
            <div className="showcase-item">
              <img
                src="/assets/keyboards/minimalBlue.png"
                alt="Minimalist Blue"
              />
              <p>Minimalist Blue</p>
            </div>
            <div className="showcase-item">
              <img
                src="/assets/keyboards/minimalWhite.png"
                alt="Minimalist White"
              />
              <p>Minimalist White</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
