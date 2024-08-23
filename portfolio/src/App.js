import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe'
import TechSkills from './components/TechSkills'
import ContactHero from './components/ContactHero';
import ContactMe from './components/ContactMe';
import WorkSection from './components/WorkSection';
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
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

