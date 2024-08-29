import React from "react";
import "../styles/ContactHero.css";

const ContactHero = ({ id }) => {  // Accept id as a prop
  return (
    <div className="contact-hero-container" id={id}> {/* Apply the id here */}
      <h1 className="contact-hero-heading">
        Let’s Make Something <br />
        Awesome <br />
        <span className="gradient-text">Together</span>
      </h1>
    </div>
  );
};

export default ContactHero;
