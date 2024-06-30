import React, { useState, useEffect } from 'react';
import './Parte3.css';

function Parte3({ nextStep }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const images = [
    { src: `${process.env.PUBLIC_URL}/images/antes.jpeg`, title: 'Antes' },
    { src: `${process.env.PUBLIC_URL}/images/depois.jpeg`, title: 'Depois' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNoClick = () => {
    setShowMessage(true);
    setButtonDisabled(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="carousel">
          <div className="carousel-item">
            <img src={images[currentIndex].src} alt={images[currentIndex].title} />
            <div className="carousel-caption">{images[currentIndex].title}</div>
          </div>
        </div>
        <p>A vida é curta para guardar rancor, prefiro guardar lembranças boas com vocês.</p>
        <p>Irão me convidar para o próximo?</p>
        <button className="button-yes" onClick={nextStep}>Sim</button>
        <button 
          className="button-no" 
          onClick={handleNoClick} 
          disabled={buttonDisabled}
        >
          Não
        </button>
        {showMessage && <p className="message">Você não pode clicar em não, aqui é ditadura, eu que decido e eu decido que sim. Estou me auto convidando.</p>}
      </div>
    </div>
  );
}

export default Parte3;
