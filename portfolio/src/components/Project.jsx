import React from "react";
import "./Project.css";

const Project = ({ image, title, summary, link }) => {
  return (
    <div className="project-component">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-circle">
          <a href={link} target="_blank" rel="noopener noreferrer">
            See It Live
          </a>
        </div>
      </div>
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-summary">{summary}</p>
      </div>
    </div>
  );
};

export default Project;