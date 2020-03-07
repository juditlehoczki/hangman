import React from 'react';
import './App.css';
import img9 from './img/9.png';
import img8 from './img/8.png';
import img7 from './img/7.png';
import img6 from './img/6.png';
import img5 from './img/5.png';
import img4 from './img/4.png';
import img3 from './img/3.png';
import img2 from './img/2.png';
import img1 from './img/1.png';
import img0 from './img/0.png';

const images = {
  0: img0,
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9
};

class App extends React.Component {
  state = {
    currentWord: 'banana',
    letters: [],
    guessesLeft: 9
  };

  handleKeyPress = event => {
    this.setState(currentState => {
      if (currentState.guessesLeft > 0) {
        const newState = {};
        if (!currentState.letters.includes(event.key.toUpperCase())) {
          newState.letters = [...currentState.letters, event.key.toUpperCase()];
          if (!currentState.currentWord.includes(event.key)) {
            newState.guessesLeft = currentState.guessesLeft - 1;
          }
        }
        return newState;
      }
    });
  };

  showCurrentState = () => {
    let currentState = '';
    for (let i = 0; i < this.state.currentWord.length; i++) {
      if (
        this.state.letters.includes(this.state.currentWord[i].toUpperCase())
      ) {
        currentState = currentState.concat(
          this.state.currentWord[i].toUpperCase()
        );
      } else {
        currentState = currentState.concat('_');
      }
    }
    return currentState
      .split('')
      .join(' ')
      .toUpperCase();
  };

  showImage = () => {
    if (this.state.guessesLeft >= 0) {
      return (
        <img
          src={images[this.state.guessesLeft]}
          alt="current state of hangman"
        />
      );
    } else {
      return <img src={images[0]} alt="current state of hangman" />;
    }
  };

  showMsg = () => {
    if (
      this.state.currentWord
        .toUpperCase()
        .split('')
        .every(letter => this.state.letters.includes(letter))
    ) {
      return "You won! Here's your prize: 🍌";
    } else if (this.state.guessesLeft > 0) {
      return `You have ${this.state.guessesLeft} guesses left.`;
    } else {
      return 'Sorry, you lost. 😕';
    }
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        <p id="current-state">{this.showCurrentState()}</p>
        <p id="letters-guessed">{this.state.letters}</p>
        <p id="image">{this.showImage()}</p>
        <p id="show-msg">{this.showMsg()}</p>
      </div>
    );
  }
}

export default App;
