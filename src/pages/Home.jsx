import React from 'react';
import ShowPortafolio from '../components/ShowPortafolio';
import BasicInfo from '../components/BasicInfo';
import Navbar from '../components/Navbar';
import "./HomeStyle.css";
import VideoComponent from '../components/VideoComponent';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="center-text">
      <h1 className="awesome-title">"Porfolio"</h1>
      </div>
      <VideoComponent />
      <BasicInfo />
      <ShowPortafolio />
      <Footer />
    </div>
  );
};

export default Home;


