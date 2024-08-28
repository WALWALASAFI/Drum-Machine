import React from 'react';

const DrumPad = ({ keyTrigger, id }) => {
  const audioClip = `https://s3.amazonaws.com/freecodecamp/drums/${id.replace("'", '')}.mp3`;

  const playAudio = () => {
    const audio = document.getElementById(keyTrigger);

    if (audio) {
      audio.currentTime = 0;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Play error:', error);
        });
      }
    }
    
    document.getElementById('display').innerText = id;
  };

  return (
    <div className="drum-pad p-4 bg-gray-600 rounded-lg text-center" id={id} onClick={playAudio}>
      {keyTrigger}
      <audio
        className="clip"
        id={keyTrigger}
        src={audioClip}
        onError={() => console.error('Audio failed to load:', audioClip)}
      ></audio>
    </div>
  );
};

export default DrumPad;
