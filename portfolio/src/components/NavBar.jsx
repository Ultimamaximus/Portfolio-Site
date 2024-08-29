import React, { useState } from "react";
import "animate.css";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = -30; // Adjust this value to set how much lower you want to scroll
      const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the section's top position
      window.scrollTo({
        top: sectionTop - offset, // Scroll to the section's top minus the offset
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close menu if open on small screens
    }
  };
  

  return (
    <nav className="navbar animate__animated animate__fadeInDown">
      <div className="logo-container">
        <h2>Victor Branson</h2>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"} {/* Change icon based on menu state */}
      </button>
      <ul className={`nav-list ${isMenuOpen ? "nav-list-open" : ""}`}>
        <li className="nav-item">
          <button className="nav-link" onClick={() => scrollToSection("about")}>
            About
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => scrollToSection("work")}>
            Work
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
