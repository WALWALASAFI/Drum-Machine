import React from 'react';

const DrumPad = ({ keyTrigger, keyCode, id, clip, playSound }) => {
  return (
    <button
      className="drum-pad"
      id={id}
      onClick={() => playSound(keyTrigger)}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={clip}></audio>
    </button>
  );
};

export default DrumPad;
