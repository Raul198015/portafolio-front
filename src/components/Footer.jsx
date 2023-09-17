import React from 'react';
import './FooterStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Importa los iconos de FontAwesome

const Footer = () => {
  return (
    <div class="footer">
      <h3>Sígueme en Redes Sociales</h3>
      <div className="social-icons">
        <a href="https://www.facebook.com/tu-pagina-de-facebook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} /> {/* Icono de Facebook */}
        </a>
        <a href="https://www.instagram.com/tu-instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> {/* Icono de Instagram */}
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Tu Sitio Web. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;


