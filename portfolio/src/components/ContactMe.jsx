import React, { useEffect, useRef } from "react";
import "animate.css"; // Importing animate.css
import "../styles/ContactMe.css"

const ContactMe = () => {
  const contactMeRef = useRef(null);

  useEffect(() => {
    const contactMeSection = contactMeRef.current;
    const options = {
      threshold: 0.1, // Trigger as soon as any part of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
        } else {
          entry.target.classList.remove("animate__animated", "animate__fadeInUp");
        }
      });
    }, options);

    const elementsToAnimate = contactMeSection.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      if (elementsToAnimate.length > 0) {
        elementsToAnimate.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="contact-me-container" ref={contactMeRef}>
      <div className="contact-text animate-on-scroll">
        <p>
          Whether you're looking to build from the ground up or enhance an
          existing project, I'm here to transform your ideas into polished
          digital experiences. Let’s collaborate to push the boundaries of your
          code and achieve outstanding results. Don’t settle for ordinary—unlock
          the full potential of your project with my expertise.
        </p>
      </div>
      <div className="contact-form animate-on-scroll">
        <form>
          <input type="text" placeholder="Your name here" />
          <input type="email" placeholder="Your email here" />
          <textarea placeholder="Resume it in a few words"></textarea>
          <button type="submit" className="submit-button">
            Let's talk <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
