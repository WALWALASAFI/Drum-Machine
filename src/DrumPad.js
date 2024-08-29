import { useEffect, useState, useRef } from 'react';

const DrumPad = ({ clip, updateDisplay }) => {
  const [active, setActive] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  const playSound = () => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.play().catch((error) => {
        // Log the error only if it's critical; otherwise, remove this line.
        console.error('Error playing sound:', error);
      });

      setActive(true);
      setTimeout(() => setActive(false), 200); // Reset to inactive after a short delay
      updateDisplay(clip.key);
    }
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
  }, [clip.key]);

  return (
    <div
      id={`drum-${clip.key}`}
      className={`drum-pad text-white font-bold py-2 px-4 rounded m-2 cursor-pointer ${clip.color} ${
        active ? 'bg-white text-black' : `${clip.color} hover:bg-white hover:text-black`
      }`}
      onClick={playSound}
    >
      {clip.key}
      <audio ref={audioRef} id={clip.key} className='clip' src={clip.sound}></audio>
    </div>
  );
};

export default DrumPad;
