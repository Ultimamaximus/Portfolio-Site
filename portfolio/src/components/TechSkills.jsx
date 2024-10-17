import React, { useEffect, useRef, useState } from "react";
import "animate.css";
import "../styles/TechSkills.css";

const TechSkills = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const techSkillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );
    if (techSkillsRef.current) {
      observer.observe(techSkillsRef.current);
    }
    return () => {
      if (techSkillsRef.current) {
        observer.unobserve(techSkillsRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`tech-skills-container ${isVisible ? "animate__animated animate__slideInLeft" : ""}`}
      id={id}
      ref={techSkillsRef}
    >
      <h2 className="tech-skills-title">01 Software Skills</h2>
      <div className="tech-skills-grid">
        <div>JavaScript</div>
        <div>Git</div>
        <div>Yarn/Gulp/Webpack</div>
        <div>Agile Methodologies</div>
        <div>NodeJS</div>
        <div>React</div>
        <div>Design Systems</div>
        <div>Serverless</div>
        <div>CSS3/Sass</div>
        <div>HTML5</div>
        <div>Grid/Flex</div>
        <div>SQL Server</div>
      </div>
    </div>
  );
};

export default TechSkills;
