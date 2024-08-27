import React, { useState } from 'react';
import DrumPad from './DrumPad';
import './App.css';

const drumPads = [
  { key: 'Q', id: 'Heater-1', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { key: 'A', id: 'Heater-4', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3' },
  { key: 'S', id: 'Clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', id: 'Open-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'Z', id: 'Kick-n\'-Hat', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'X', id: 'Kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Closed-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
];

function App() {
  const [display, setDisplay] = useState('');

  const handleDisplay = (id) => setDisplay(id);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-bank">
        {drumPads.map(drumPad => (
          <DrumPad
            key={drumPad.key}
            id={drumPad.id}
            letter={drumPad.key}
            src={drumPad.src}
            handleDisplay={handleDisplay}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
