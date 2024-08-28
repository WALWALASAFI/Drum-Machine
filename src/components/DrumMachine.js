import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';

const drumPads = [
  { keyCode: 81, keyTrigger: 'Q', id: 'Heater-1', clip: 'URL_TO_SOUND_1' },
  { keyCode: 87, keyTrigger: 'W', id: 'Heater-2', clip: 'URL_TO_SOUND_2' },
  { keyCode: 69, keyTrigger: 'E', id: 'Heater-3', clip: 'URL_TO_SOUND_3' },
  { keyCode: 65, keyTrigger: 'A', id: 'Heater-4', clip: 'URL_TO_SOUND_4' },
  { keyCode: 83, keyTrigger: 'S', id: 'Clap', clip: 'URL_TO_SOUND_5' },
  { keyCode: 68, keyTrigger: 'D', id: 'Open-HH', clip: 'URL_TO_SOUND_6' },
  { keyCode: 90, keyTrigger: 'Z', id: 'Kick-n\'-Hat', clip: 'URL_TO_SOUND_7' },
  { keyCode: 88, keyTrigger: 'X', id: 'Kick', clip: 'URL_TO_SOUND_8' },
  { keyCode: 67, keyTrigger: 'C', id: 'Closed-HH', clip: 'URL_TO_SOUND_9' }
];

const DrumMachine = () => {
  const [display, setDisplay] = useState('');

  const playSound = (keyTrigger) => {
    const audio = document.getElementById(keyTrigger);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(keyTrigger);
    }
  };

  const handleKeyPress = (event) => {
    const pad = drumPads.find(pad => pad.keyCode === event.keyCode);
    if (pad) {
      playSound(pad.keyTrigger);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-bank">
        {drumPads.map(pad => (
          <DrumPad
            key={pad.id}
            keyTrigger={pad.keyTrigger}
            keyCode={pad.keyCode}
            id={pad.id}
            clip={pad.clip}
            playSound={playSound}
          />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
