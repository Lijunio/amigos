import React, { useEffect, useRef } from 'react';

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play();
    }

    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/amigo.mp3" type="audio/mpeg" />
      Seu navegador não suporta o elemento de áudio.
    </audio>
  );
}

export default MusicPlayer;
