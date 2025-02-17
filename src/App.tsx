import { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import About from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // must match your component markup

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // when section enters the viewport, set the active ID
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <nav className="navBar">
        <div className="navBar-left">
          <a className="brandName" href="/">
          alan<span>|</span>lee
          </a>
        </div>

        <div className="navBar-right">
          <Link
            smooth
            to="/#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            smooth
            to="/#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </Link>
          <Link
            smooth
            to="/#experience"
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </Link>
          <Link
            smooth
            to="/#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>
      </nav>

      <About />
      <Skills />
      <Experience />
      <Contact />
    </Router>
  );
}

export default App;

