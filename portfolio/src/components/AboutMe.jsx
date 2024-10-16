import React from "react";
import "../styles/AboutMe.css";
import aboutMePhoto from "../images/DevArt.jpeg"; // Replace this with your actual image

const AboutMe = ({ id }) => {
  return (
    <div className="about-me-section" id={id}>
      <div className="about-me-image-container">
        <img src={aboutMePhoto} alt="About Me" className="about-me-photo" />
      </div>
      <div className="about-me-content">
        <h2 className="about-me-title">My Journey So Far</h2>
        <p className="about-me-paragraph">
          I have been working for the past 4 years with JavaScript, and for the
          last couple of years, I’ve been writing and refactoring code while
          connecting RESTful APIs using React and TypeScript. I’m committed to
          delivering clean, structured, and highly interactive experiences that
          elevate your online presence. Whether you're launching a new venture
          or refining an existing platform, my goal is to turn your digital
          vision into reality.
        </p>
        <button className="about-me-button">
          Let's talk <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
