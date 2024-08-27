import React from "react";
import "../styles/Project.css"

const Project = ({ image, title, summary, link }) => {
  return (
    <div className="project-component">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-circle-link">
          <div className="project-circle">
            See It Live
          </div>
        </a>
      </div>
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-summary">{summary}</p>
      </div>
    </div>
  );
};

export default Project;