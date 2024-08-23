import React from 'react';
import Navbar from './Components/Navbar'; 
import Hero from './Components/Hero'; 
import AboutMe from './Components/AboutMe'
import TechSkills from './Components/TechSkills'
import ContactHero from './Components/ContactHero';
import ContactMe from './Components/ContactMe';
import WorkSection from './Components/WorkSection';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <TechSkills />
      <WorkSection />
      <ContactHero />
      <ContactMe />
    </div>
  );
}


export default App;

