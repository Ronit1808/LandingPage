import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src='Logo.png' alt="logo" />
        </div>
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/" className="nav-link">About</a>
          <a href="/" className="nav-link">Projects</a>
          <a href="/" className="nav-link">Contact</a>
        </div>
        <div className="hire-button">
          <a href="/" className="btn">HIRE ME</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;