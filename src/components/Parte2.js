import React, { useEffect } from 'react';

function Parte2({ nextStep }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('nextButton').style.display = 'block';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <img src="/jow.jpeg" alt="Imagem divertida" />
        <p>Fico feliz por verem vocês felizes, mais feliz seria se eu fosse convidado primeiramente e obviamente se eu estivesse com vocês</p>
      </div>
      <button id="nextButton" className="button" style={{ display: 'none' }} onClick={nextStep}>Próximo</button>
    </div>
  );
}

export default Parte2;
