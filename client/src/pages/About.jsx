// client/src/pages/About.jsx

import "../styles/About.css";
import Footer from "../components/Footer";
// Import icons for tech stack
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

/**
 * About Page
 * Provides information about the project, mission, and tech stack used.
 */
export default function About() {
  return (
    <>
      <div className="about-container">
        {/* Page Title */}
        <h1 className="about-heading">About</h1>

        {/* Introduction text */}
        <p className="intro-text">
          This project was built to showcase my passion through the design of a
          modern one-stop shop for users to create their very own custom
          keyboards, possibly marking their first step into a personal keyboard
          journey.
        </p>

        {/* Mission Section */}
        <section className="mission-section">
          <h2>My Mission</h2>
          <p>
            When I was introduced to the fascinating world of keyboards, I found
            myself exploring the intricate parts that make up a custom build.
            While this project only scratches the surface, it serves as a solid
            introduction for anyone starting their own keyboard journey.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section className="tech-stack">
          <h2>Built With</h2>
          <div className="stack-icons">
            <FaReact className="icon react" />
            <FaNodeJs className="icon node" />
            <SiExpress className="icon express" />
            <SiMongodb className="icon mongo" />
          </div>
        </section>

        {/* Signature */}
        <p className="signature">Designed & Developed by Valentino Soto</p>
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
}
