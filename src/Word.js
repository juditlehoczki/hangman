import React from 'react';

const Word = props => {
  let currentState = '';
  for (let i = 0; i < props.currentWord.length; i++) {
    if (props.letters.includes(props.currentWord[i].toUpperCase())) {
      currentState = currentState.concat(props.currentWord[i].toUpperCase());
    } else {
      currentState = currentState.concat('_');
    }
  }
  return (
    <p id="current-state">
      {currentState
        .split('')
        .join(' ')
        .toUpperCase()}
    </p>
  );
};

export default Word;
