import "../styles/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Social media icons

/**
 * Footer Component
 *
 * Displays the copyright notice and social media links.
 * Social links open in a new tab for external navigation.
 */
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Copyright text */}
        <p className="footer-text">© 2025 Re:write. All rights reserved.</p>

        {/* Social media links */}
        <div className="social-icons">
          <a
            href="https://github.com/mattino164"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/valentino-soto-97720a212"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
