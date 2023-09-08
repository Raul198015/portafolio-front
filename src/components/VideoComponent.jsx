import React from 'react';
import logoVideo from '../components/Rookie.mp4';

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video width={500} autoPlay  >
        <source src={logoVideo} type="video/mp4" />
        Tu navegador no admite la reproducción de video.
      </video>
    </div>
  );
};

export default VideoComponent;
