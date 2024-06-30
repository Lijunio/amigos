import React, { useEffect, useRef } from 'react';

function MusicPlayer({ onPlay }) {
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play().then(() => {
        onPlay();
        console.log("Audio playback started");
      }).catch(error => {
        console.log("Playback error:", error);
      });
    }
  };

  useEffect(() => {
    return () => {
      const audioElement = audioRef.current;
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/images/amigo.mp3`} loop />
      <button className="button-play" onClick={handlePlay}>Clica nesse botão aqui para sentir remorso de não ter me convidado.</button>
    </div>
  );
}

export default MusicPlayer;
