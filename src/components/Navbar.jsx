import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <span className="logo-text">KK</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Hjem</Link>
          </li>
          <li className="nav-item">
            <Link to="/s2/sannsynlighet" className="nav-link" onClick={() => setIsMenuOpen(false)}>S2 Sannsynlighet</Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Oppskrifter</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Ingredienser</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Om oss</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
