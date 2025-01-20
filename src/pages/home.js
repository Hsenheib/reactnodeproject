import React from "react";
import { Link } from 'react-router-dom'; // Only import Link, no need for Router here
import './home.css'; // Make sure to add the correct CSS file
import DborImage from './Dbor.jpg';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={DborImage} // Insert your logo path here
          alt="Project Logo"
          className="logo"
        />
        <h1 className="project-name">Worked constraints</h1>
      </div>
      
      <nav className="nav">
        <ul>
          <li><Link to="/header">Home</Link></li>
          <li><Link to="/footer">Select Day</Link></li>
          <li><Link to="/Aboutpage">About</Link></li>
          <li><Link to="/ContactPage">Contact</Link></li>
          <li><Link to="/contact">Logs</Link></li>
        </ul>
      </nav>
    </header>
    
  );
}

export default Header;
