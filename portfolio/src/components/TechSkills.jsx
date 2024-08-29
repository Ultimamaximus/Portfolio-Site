import React from "react";
import "../styles/TechSkills.css"

const TechSkills = ({ id }) => {
  return (
    <div className="tech-skills-container" id={id}>
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