import React from 'react';
import "./PortafolioListStyle.css";

function PortfolioList({ projects }) {
  if (!projects || projects.length === 0) {
    return <p>No hay proyectos disponibles.</p>;
  }
    <div className= "portfolio-list-container">
      <h2>Proyectos</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} />
          <p>Repositorio: <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Enlace</a></p>
          <p>Despliegue: <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer">Enlace</a></p>
        </div>
      ))}
    </div>
  ;
}

export default PortfolioList;
