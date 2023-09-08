import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css'; 
import logoImage from '../components/foto-carnet2.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
        <img src={logoImage} alt="Logo" width={75} />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/portfolio">Porfolio</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;



