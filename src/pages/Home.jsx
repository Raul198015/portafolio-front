import React from 'react';
import BasicInfo from '../components/BasicInfo';
import Navbar from '../components/Navbar';
import "./HomeStyle.css";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="center-text">
      <h1 className="awesome-title">"Porfolio"</h1>
      </div>
      
      <BasicInfo />
      <Footer />
    </div>
  );
};

export default Home;

