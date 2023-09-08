import React from 'react';
import ShowPortafolio from '../components/ShowPortafolio';
import BasicInfo from '../components/BasicInfo';
import Navbar from '../components/Navbar';
import "./HomeStyle.css";
import VideoComponent from '../components/VideoComponent';
import GitHubProjects from '../components/GitHubProjects';

const Home = () => {
  
  return (
    <div>
      <Navbar />
      
      <div className="center-text">
      <h1>"Porfolio"</h1>
      </div>
      <VideoComponent />
      <ShowPortafolio />
      <BasicInfo />
      <GitHubProjects />
      
         </div>
  );
};

export default Home;

