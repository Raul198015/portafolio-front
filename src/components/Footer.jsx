import React from 'react';
import './FooterStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons'; 
const Footer = () => {
  return (
    <div class="footer">
      <h3>Sígueme en Redes Sociales</h3>
      <div className="social-icons">
        <a href="https://www.facebook.com/tu-pagina-de-facebook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/tu-instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.twitter.com/tu-pagina-de-twitter" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} /> 
        </a>
        <a href="https://www.twitch.com/tu-pagina-de-twitch" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitch} /> 
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Tu Sitio Web. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;


