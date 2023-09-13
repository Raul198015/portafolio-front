import React from 'react';
import GitHubProjects from '../components/GitHubProjects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./HomeStyle.css";


const Projects = () => {
  return (
    <div class name="projects">
      <Navbar/>
      <GitHubProjects />
      <Footer />
    </div>
  );
};

export default Projects;
