import React, { useEffect, useState } from 'react'; // Ensure React is imported

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

export default DrumMachine; // Ensure DrumMachine is exported correctly
