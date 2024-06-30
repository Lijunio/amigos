import React, { useEffect, useRef } from 'react';

function MusicPlayer({ onPlay }) {
  const audioRef = useRef(null);

  useEffect(() => {
    return () => {
      const audioElement = audioRef.current;
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  return (
    <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/images/amigo.mp3`} loop />
  );
}

export default MusicPlayer;
