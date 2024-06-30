import React, { useState } from 'react';
import Tutorial from './components/Tutorial';
import Parte2 from './components/Parte2';
import Parte3 from './components/Parte3';
import Final from './components/Final';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  return (
    <div>
      <MusicPlayer /> {/* Adiciona o player de música no topo */}
      {step === 1 && <Tutorial nextStep={nextStep} />}
      {step === 2 && <Parte2 nextStep={nextStep} />}
      {step === 3 && <Parte3 nextStep={nextStep} />}
      {step === 4 && <Final />}
    </div>
  );
}

export default App;
