import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./GitHubProjectsStyle.css"


const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Cambia 'tu-usuario' al nombre de usuario de tu cuenta de GitHub
    axios.get('https://api.github.com/users/Raul198015/repos')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>

      <div className="projects">
      <h1>Mis Proyectos de GitHub</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default GitHubProjects;
