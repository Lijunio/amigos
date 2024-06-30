import React from 'react';

function Tutorial({ nextStep }) {
  return (
    <div className="container">
      <img src={`${process.env.PUBLIC_URL}/images/amizades.jpg`} alt="Imagem tutorial" className="tutorial-image" />
      <h1>Tutorial de como não ser um bom amigo com meus amigos/familia do Alto Vera Cruz</h1>
      <button onClick={nextStep}>Próximo</button>
    </div>
  );
}

export default Tutorial;
