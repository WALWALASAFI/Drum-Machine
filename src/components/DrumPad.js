import React from 'react';

const DrumPad = ({ keyTrigger, keyCode, id, clip, playSound }) => {
  return (
    <button
      className="drum-pad bg-gray-700 text-white rounded-lg p-4 hover:bg-gray-600 active:bg-gray-500 transition-colors"
      id={id}
      onClick={() => playSound(keyTrigger)}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={clip}></audio>
    </button>
  );
};

export default DrumPad;
