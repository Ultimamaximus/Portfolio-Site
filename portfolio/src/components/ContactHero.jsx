import React, { useEffect, useRef } from "react";
import "animate.css";
import "../styles/ContactHero.css";

const ContactHero = ({ id }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
            observer.unobserve(entry.target); // Unobserve after animation triggers
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <div className="contact-hero-container animate-on-scroll" id={id} ref={heroRef}>
      <h1 className="contact-hero-heading">
        Let’s Make Something <br />
        Awesome <br />
        <span className="gradient-text">Together</span>
      </h1>
    </div>
  );
};

export default ContactHero;
