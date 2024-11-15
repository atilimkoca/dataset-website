// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import aiLabLogo from '../assets/images/ai-lab-logo.png';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          <img src={aiLabLogo} alt="IKCU AI Lab" height="40" />
          <span className="brand-text">IKCU AI Lab</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>

          <Link to="/dataset" className={`nav-link ${isActive('/dataset')}`}>Dataset</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;