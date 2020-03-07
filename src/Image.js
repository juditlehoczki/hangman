import React from 'react';

const images = [];
for (let i = 0; i < 10; i++) {
  images.push(require(`./img/${i}.png`));
}

const Image = props => (
  <img
    id="hangman-img"
    src={images[props.guessesLeft]}
    alt="current state of hangman"
  />
);

export default Image;
