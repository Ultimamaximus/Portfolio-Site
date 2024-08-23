import React from "react";
import "animate.css"; // Importing animate.css
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <div className="contact-text animate__animated animate__fadeInUp">
        <p>
          Whether you're looking to build from the ground up or enhance an
          existing project, I'm here to transform your ideas into polished
          digital experiences. Let’s collaborate to push the boundaries of your
          code and achieve outstanding results. Don’t settle for ordinary—unlock
          the full potential of your project with my expertise.
        </p>
      </div>
      <div className="contact-form animate__animated animate__fadeInUp">
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
