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
      <h1>Tutorial de como não ser um bom amigo com o Elias Junio Souza Ribeiro vulgamente conhecido como filho do Revetria</h1>
      <MusicPlayer onPlay={handlePlay} />
      {isPlaying && <button className="button" onClick={nextStep}>Próximo</button>}
    </div>
  );
}

export default Tutorial;
