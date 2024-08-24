import React, { useEffect, useRef } from "react";
import "animate.css";
import "../styles/AboutMe.css";
import aboutMePhoto from "../images/laptop.jpg";

const AboutMe = () => {
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const aboutMeSection = aboutMeRef.current;
    const options = {
      threshold: .1, // Trigger as soon as any part of the element is in view
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

    const elementsToAnimate = aboutMeSection.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      if (elementsToAnimate.length > 0) {
        elementsToAnimate.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="about-me-container" ref={aboutMeRef}>
      <h2 className="about-me-title animate-on-scroll">
        About Me
      </h2>
      <p className="about-me-paragraph animate-on-scroll">
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
        className="about-me-photo animate-on-scroll"
      />
    </div>
  );
};

export default AboutMe;
