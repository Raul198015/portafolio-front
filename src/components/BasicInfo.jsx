import React from 'react';
import "./BasicInfoStyle.css"

function BasicInfo() {
  return (
    <div className="basic-info-container">
    
      <h2>Datos de Contacto</h2>
      <p>Nombre: Raul Labajos Oca</p>
      <p>Correo Electrónico: raru69@hotmail.com</p>
      <p>Teléfono: 637125344</p>
      <p>GitHub: <a href="https://github.com/Raul198015" target="_blank" rel="noopener noreferrer">tu-usuario</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/raul-labajos-oca-83aa25127/" target="_blank" rel="noopener noreferrer">Tu Perfil</a></p>
      <p>Currículum: <a href="/CurriculumFullStack.pdf" download>Descargar Currículum</a>
      </p>

      <h2>Aficiones y Pasatiempos</h2>
      <p>Deportes,Viajes, etc.</p>

      <h2>Lenguajes y Tecnologías</h2>
      <p>JavaScript, React, HTML, CSS, etc.</p>

      <h2>Soft Skills</h2>
      <p>Comunicación, Trabajo en equipo, Resolución de problemas, etc.</p>
    </div>
  );
}

export default BasicInfo;
