import React, { useEffect, useRef } from 'react';

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play().then(() => {
        console.log("Audio playback started");
      }).catch(error => {
        console.log("Playback error:", error);
      });
    }

    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  return (
    <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/images/amigo.mp3`} loop>
      Seu navegador não suporta o elemento de áudio.
    </audio>
  );
}

export default MusicPlayer;
