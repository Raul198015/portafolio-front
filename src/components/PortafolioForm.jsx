import React, { useState } from 'react';
import "./PortafolioFormStyle.css";

function PortafolioForm({ onAddProject }) {
  const [project, setProject] = useState({
    name: '',
    description: '',
    image: '',
    repoLink: '',
    deploymentLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía el proyecto al backend o realiza una acción similar
    onAddProject(project);
    // Limpia el formulario
    setProject({
      name: '',
      description: '',
      image: '',
      repoLink: '',
      deploymentLink: '',
    });
  };

  return (
    <div className="portafolio-form-container">
      <h2>Agregar Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del Proyecto:
          <input type="text" name="name" value={project.name} onChange={handleChange} required />
        </label>
        <label>
          Descripción:
          <textarea name="description" value={project.description} onChange={handleChange} required />
        </label>
        <label>
          Imagen:
          <input type="text" name="image" value={project.image} onChange={handleChange} />
        </label>
        <label>
          Enlace del Repositorio (GitHub, por ejemplo):
          <input type="text" name="repoLink" value={project.repoLink} onChange={handleChange} />
        </label>
        <label>
          Enlace del Despliegue:
          <input type="text" name="deploymentLink" value={project.deploymentLink} onChange={handleChange} />
        </label>
        <button type="submit">Agregar Proyecto</button>
      </form>
    </div>
  );
}

export default PortafolioForm;
