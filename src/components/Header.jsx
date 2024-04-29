import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../sort-guld-logo-removebg-preview.png'; // Import the logo image

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-bg">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Sort Guld Logo" style={{ width: '150px', height: 'auto', marginRight: '10px' }} /> {/* Make the image smaller */}
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleNavbar} 
        aria-controls="navbarNavAltMarkup" 
        aria-expanded={!isCollapsed ? "true" : "false"} 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/" style={{ fontSize: '20px', color: 'black' }}>Hjem <span className="sr-only">(current)</span></Link> {/* Make the font size bigger */}
          <Link className="nav-item nav-link" to="/Menu" style={{ fontSize: '20px', color: 'black' }}>Menu</Link> {/* Make the font size bigger */}
          <Link className="nav-item nav-link" to="/Job" style={{ fontSize: '20px', color: 'black' }}>Job</Link> {/* Make the font size bigger */}
          <Link className="nav-item nav-link" to="/Contact" style={{ fontSize: '20px', color: 'black' }}>Kontakt og Åbningstider</Link> {/* Make the font size bigger */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
