import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSheetPlastic, faPlus, faPaintRoller, faFileSignature } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesitas
import './NavbarStyle.css';
import logoImage from '../components/fotocarnet.png'; 

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="navbar">
      <div className='img-container'>
        <img src="src/components/cometa2.png" alt="cometa" />
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" width={70} />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/Home">
            <FontAwesomeIcon icon={faHouse} bounce size="lg" /> 
          </Link>
        </li>
        <li>
          <Link to="/GitHubProjects">
            <FontAwesomeIcon icon={faSheetPlastic}  bounce size="lg" /> 
          </Link>
        </li>
        <li>
          <Link to="/Create">
            <FontAwesomeIcon icon={faPlus} bounce size ="lg"/> 
          </Link>
        </li>
        <li>
          <Link to="/Creados">
            <FontAwesomeIcon icon={faPaintRoller} bounce size="lg" />
          </Link>
        </li>
        <li>
          <Link to="/Contacto">
            <FontAwesomeIcon icon={faFileSignature} bounce size="lg" />
          </Link>
        </li> 
      </ul>
      
      
    </nav>
  );
};

export default Navbar;





