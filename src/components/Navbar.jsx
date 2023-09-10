import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGhost } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesitas

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
          <Link to="/">
          <FontAwesomeIcon icon={faHouse} beat size="lg" /> 
          </Link>
        </li>
        <li>
          <Link to="/about">
          <FontAwesomeIcon icon={faGhost} beat size="lg" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




