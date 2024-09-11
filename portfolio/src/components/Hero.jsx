import React from 'react';
import "../styles/Hero.css"
import 'animate.css';
import heroImage from '../images/Hero.webp'; 

const Hero = () => {
    return (
      <div className="hero-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="text-container">
          <h1 className="title animate__animated animate__fadeInUp">hello folks, I'm</h1>
          <p className="subtitle animate__animated animate__fadeInUp">Victor Branson</p>
        </div>
      </div>
    );
  };  

export default Hero;