import React from 'react';
import ShowPortafolio from '../components/ShowPortafolio';
import BasicInfo from '../components/BasicInfo';
import PortafolioForm from '../components/PortafolioForm';
import PortafolioList from '../components/PortafolioList';
import Navbar from '../components/Navbar';
import "./HomeStyle.css";

const Home = () => {
  const proyectos = [
    {
      name: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      image: 'imagen1.jpg',
      repoLink: 'https://github.com/proyecto1',
      deploymentLink: 'https://proyecto1.com',
    },
    {
      name: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      image: 'imagen2.jpg',
      repoLink: 'https://github.com/proyecto2',
      deploymentLink: 'https://proyecto2.com',
    },
    // Otros proyectos...
  ];

  return (
    <div>
      <Navbar />
      
      <div className="center-text">
      <h1>"Portafolio"</h1>
      </div>
      <ShowPortafolio />
      <BasicInfo />
      <PortafolioForm />
      <PortafolioList projects={proyectos} />
         </div>
  );
};

export default Home;

