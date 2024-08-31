// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.jpeg'; // Import the logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" /> {/* Add the logo image */}
          Thuy Tran
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>
        <ul className={isOpen ? "nav-list open" : "nav-list"}>
          <li className="nav-item"><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li className="nav-item"><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li className="nav-item"><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li className="nav-item"><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
