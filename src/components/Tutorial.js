import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';

function Tutorial({ nextStep }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="container">
      <img src={`${process.env.PUBLIC_URL}/images/amizades.jpg`} alt="Imagem tutorial" className="tutorial-image" />
      <h1>Tutorial de como não ser um bom amigo com meus amigos/familia do Alto Vera Cruz</h1>
      <MusicPlayer onPlay={handlePlay} />
      {isPlaying && <button className="button" onClick={nextStep}>Próximo</button>}
    </div>
  );
}

export default Tutorial;
