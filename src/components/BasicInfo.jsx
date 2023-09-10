import React from 'react';
import "./BasicInfoStyle.css"

function BasicInfo() {
  return (
    <div className="basic-info-container">
    
      <h1>Datos de Contacto</h1>
      <p>Nombre: Raul Labajos Oca</p>
      <p>Correo Electrónico: raru69@hotmail.com</p>
      <p>Teléfono: 637125344</p>
      <p>GitHub: <a href="https://github.com/Raul198015" target="_blank" rel="noopener noreferrer">tu-usuario</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/raul-labajos-oca-83aa25127/" target="_blank" rel="noopener noreferrer">Tu Perfil</a></p>
      <p>Currículum: <a href="/CurriculumFullStack.pdf" download>Descargar Currículum</a>
      <h1>Sobre Mi</h1>
      <p>Soy un programador Fullstack Junior con un enfoque apasionado por el desarrollo web y la resolución de problemas. Poseo un curso de Programador Fullstack de 850 horas impartido por Factoría F5, donde he adquirido sólidos conocimientos endesarrollo frontend y backend. Mi objetivo es seguir creciendo profesionalmente y contribuir en proyectos innovadores mientras aplico mis habilidades técnicas y creativas.</p>
      </p>

      <h1>Aficiones y Pasatiempos</h1>
      <p>Deportes,Viajes, etc.</p>

      <h1>Lenguajes y Tecnologías</h1>
      <p>JavaScript, React, HTML, CSS, etc.</p>

      <h1>Soft Skills</h1>
      <p>Comunicación, Trabajo en equipo, Resolución de problemas, etc.</p>
    </div>
  );
}

export default BasicInfo;
