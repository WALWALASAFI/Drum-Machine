import { useEffect, useState } from 'react';

const audioClips = [
  { key: 'Q', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', color: 'bg-red-500' },
  { key: 'W', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', color: 'bg-blue-500' },
  { key: 'E', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', color: 'bg-green-500' },
  { key: 'A', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', color: 'bg-yellow-500' },
  { key: 'S', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', color: 'bg-purple-500' },
  { key: 'D', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', color: 'bg-pink-500' },
  { key: 'Z', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', color: 'bg-orange-500' },
  { key: 'X', sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', color: 'bg-teal-500' },
  { key: 'C', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', color: 'bg-indigo-500' },
];

// No need to import DrumPad if it's defined in the same file

const DrumPad = ({ clip, updateDisplay }) => {
  const [active, setActive] = useState(false);

  const playSound = () => {
    const audioElement = document.getElementById(clip.key);
    audioElement.currentTime = 0;
    audioElement.play();
    setActive(true);
    setTimeout(() => setActive(false), 200); // Reset to inactive after a short delay
    updateDisplay(clip.key);
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key.toUpperCase() === clip.key) {
        playSound();
      }
    };
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [clip.key]); // Removed playSound from dependencies

  return (
    <div
      id={`drum-${clip.key}`}
      className={`drum-pad text-white font-bold py-2 px-4 rounded m-2 cursor-pointer ${clip.color} ${
        active ? 'bg-white text-black' : `${clip.color} hover:bg-white hover:text-black`
      }`}
      onClick={playSound}
    >
      {clip.key}
      <audio id={clip.key} className='clip' src={clip.sound}></audio>
    </div>
  );
};

const DrumMachine = () => {
  const [display, setDisplay] = useState('Press a Key');

  const updateDisplay = (key) => {
    setDisplay(key);
  };

  return (
    <div id='drum-machine' className='flex flex-col items-center justify-center h-screen bg-white text-black p-4 rounded-lg'>
      <h1 className='text-3xl font-bold mb-4'>Drum Machine</h1>
      <div id='display' className='text-2xl font-bold mb-4'>
        {display}
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {audioClips.map((clip) => (
          <DrumPad key={clip.key} clip={clip} updateDisplay={updateDisplay} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
