import React from 'react';
import 'animate.css';
import './NavBar.css'; 

const NavBar = () => {
    return (
      <nav className="navbar animate__animated animate__fadeInDown">
        <div className="logo-container">
          <h2>Victor Branson</h2>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-link">About</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Work</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Contact</button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  
