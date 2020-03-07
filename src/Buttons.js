import React from 'react';
import words from './words.js';

const Buttons = props => {
  return ['easy', 'normal', 'hard'].map((level, index) => {
    return (
      <button
        key={level}
        onClick={() => {
          props.newGame(level);
        }}
      >
        {words[props.language].level[index]}
      </button>
    );
  });
};

export default Buttons;
