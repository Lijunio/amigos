import React, { useEffect, useRef, useState } from 'react';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play().then(() => {
        setIsPlaying(true);
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
      {!isPlaying && <button onClick={handlePlay}>Play Music</button>}
    </div>
  );
}

export default MusicPlayer;
