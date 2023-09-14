import React from 'react';
import './BasicInfoStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons';
const BasicInfo = () => {
  return (
    
    
      <div className="basic-info-container">
      <section>
        <h1>Datos de Contacto</h1>
        <p><FontAwesomeIcon icon={faUser} /> Nombre: Raul Labajos Oca</p>      
        <p><FontAwesomeIcon icon={faEnvelope} /> Correo Electrónico:{' '}
          <a href="mailto:raru69@hotmail.com">raru69@hotmail.com</a></p>
          <p><FontAwesomeIcon icon={faPhone} /> Teléfono: 637125344</p>
          <p><FontAwesomeIcon icon={faGithub} /> GitHub:{' '}<a href="https://github.com/Raul198015" target="_blank" rel="noopener noreferrer">Mi usuario</a></p>
          <p><FontAwesomeIcon icon={faLinkedin} /> LinkedIn:{' '}<a href="https://www.linkedin.com/in/raul-labajos-oca" target="_blank" rel="noopener noreferrer">Mi Perfil</a></p>
          <p><FontAwesomeIcon icon={faFilePdf} /> Currículum:{' '}<a href="/CurriculumFullStack.pdf" download>Descarga Mi Currículum</a></p>
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
        <p>Deportes, Viajes, etc.</p>
      </section>
      <section>
        <h1>Lenguajes y Tecnologías</h1>
        <p>JavaScript, React, HTML, CSS, etc.</p>
      </section>
      <section>
        <h1>Soft Skills</h1>
        <p>Comunicación, Trabajo en equipo, Resolución de problemas, etc.</p>
      </section>
    </div>
  );
};

export default BasicInfo;

