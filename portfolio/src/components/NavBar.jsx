import React, { useState, useRef } from "react";
import "animate.css";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navListRef = useRef(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Start fade-out animation when closing
      setIsAnimating(true);
      navListRef.current.classList.add("animate__animated", "animate__fadeOutUp");
    } else {
      // Show menu without display flicker
      setIsMenuOpen(true);
    }
  };

  const handleAnimationEnd = () => {
    if (isAnimating) {
      // After animation ends, hide the menu properly
      setIsMenuOpen(false);
      setIsAnimating(false);
      navListRef.current.classList.remove("animate__animated", "animate__fadeOutUp");
      // Add hidden class to prevent display flicker
      navListRef.current.classList.add("hidden");
    } else {
      // Remove hidden class when opening
      navListRef.current.classList.remove("hidden");
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = -30;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
      setIsAnimating(true);
      navListRef.current.classList.add("animate__animated", "animate__fadeOutUp");
    }
  };

  return (
    <nav className="navbar animate__animated animate__fadeInDown">
      <div className="logo-container">
        <h2>Victor Branson</h2>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>
      <ul
        ref={navListRef}
        className={`nav-list ${
          isMenuOpen
            ? "nav-list-open animate__animated animate__fadeInDown"
            : isAnimating
            ? ""
            : "hidden"
        }`}
        onAnimationEnd={handleAnimationEnd}
      >
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
