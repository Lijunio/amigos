import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';

function Tutorial({ nextStep }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      audioElement.play().then(() => {
        console.log("Audio playback started");
      }).catch(error => {
        console.log("Playback error:", error);
      });
    }
  };

  return (
    <div className="container">
      <img src={`${process.env.PUBLIC_URL}/images/amizades.jpg`} alt="Imagem tutorial" className="tutorial-image" />
      <h1>Tutorial de como ser um bom amigo com o Elias Junio Souza Ribeiro vulgamente conhecido como filho do Revetria/Pé Vermelho.</h1>
      <MusicPlayer isPlaying={isPlaying} />
      {!isPlaying && <button className="button-play" onClick={handlePlay}>Clique nesse botão para ser consumido pelo remorso de não ter me convidado e nem sequer ter lembrado de mim.</button>}
      {isPlaying && <button className="button" onClick={nextStep}>Próximo</button>}
    </div>
  );
}

export default Tutorial;
