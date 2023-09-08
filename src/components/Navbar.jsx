import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Portafolio</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/portfolio">Portafolio</Link>
        </li>
        {/* Agrega más enlaces según tus secciones */}
      </ul>
    </nav>
  );
};

export default Navbar;



