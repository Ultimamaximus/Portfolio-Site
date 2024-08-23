import React from "react";
import "animate.css";
import "../styles/AboutMe.css"
import aboutMePhoto from "../images/laptop.jpg";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2 className="about-me-title animate__animated animate__fadeInUp">
        About Me
      </h2>
      <p className="about-me-paragraph animate__animated animate__fadeInUp">
        I have been working for the past 4 years with JavaScript, and for the
        last couple of years, I’ve been writing and refactoring code while
        connecting RESTful APIs using <span>React</span> and
        <span> TypeScript</span>. I’m committed to delivering clean, structured,
        and highly interactive experiences that elevate your online presence.
        Whether you're launching a new venture or refining an existing platform,
        my goal is to turn your digital vision into reality.
      </p>
      <img
        src={aboutMePhoto}
        alt="About Me"
        className="about-me-photo animate__animated animate__fadeIn"
      />
    </div>
  );
};

export default AboutMe;