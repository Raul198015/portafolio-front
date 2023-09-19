import React from 'react';
import './BasicInfoStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faFilePdf, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import AnalogClock from './DigitalClock';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const BasicInfo = () => {
  const enlaceGoogleMaps = `https://www.google.com/maps?q=Barcelona+08020`;

  return (
    <div className="basic-info-container">
      <section>
        <h1>Datos de Contacto</h1>
        <AnalogClock />
        <p><FontAwesomeIcon icon={faUser} beat /> Nombre: Raul Labajos Oca</p>
        <p><FontAwesomeIcon icon={faLocationDot} beat /> Dirección: <a href={enlaceGoogleMaps} target="_blank" rel="noopener noreferrer">Barcelona 08020 (España)</a></p>
        <p><FontAwesomeIcon icon={faEnvelope} beat /> Correo Electrónico:{' '}
          <a href="mailto:raru69@hotmail.com">raru69@hotmail.com</a></p>
        <p><FontAwesomeIcon icon={faPhone} beat /> Teléfono: 637125344</p>
        <p><FontAwesomeIcon icon={faGithub} beat /> GitHub:{' '}<a href="https://github.com/Raul198015" target="_blank" rel="noopener noreferrer">Raul198015</a></p>
        <p><FontAwesomeIcon icon={faLinkedin} beat /> LinkedIn:{' '}<a href="https://www.linkedin.com/in/raul-labajos-oca" target="_blank" rel="noopener noreferrer">raul-labajos-oca</a></p>
        <p><FontAwesomeIcon icon={faFilePdf} beat /> Currículum:{' '}<a href="./src/components/CurriculumFullStack1.0.pdf" download>Descarga Mi Currículum</a></p>
      </section>
      <section>
        <h1>Sobre Mi</h1>
        <p>
          Soy un programador Fullstack Junior con un enfoque apasionado por el
          desarrollo web y la resolución de problemas. Poseo un curso de
          Programador Fullstack de 850 horas impartido por Factoría F5, donde
          he adquirido sólidos conocimientos en desarrollo frontend y backend.
          Mi objetivo es seguir creciendo profesionalmente y contribuir en
          proyectos innovadores mientras aplico mis habilidades técnicas y
          creativas.
        </p>
      </section>
      <section>
        <h1>Aficiones y Pasatiempos</h1>
        <p>Deportes, Viajes, Videojuegos. </p>
      </section>
      <section>
        <h1>Lenguajes y Tecnologías</h1>
        <p>JavaScript, React, HTML, CSS.</p>
      </section>
      <section>
        <h1>Soft Skills</h1>
        <p>Comunicación, Trabajo en equipo, Resolución de problemas.</p>
      </section>
    </div>
  );
};

export default BasicInfo;


