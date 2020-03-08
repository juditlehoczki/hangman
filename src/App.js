import React from 'react';
import './App.css';
import words from './words.js';
import Image from './Image.js';
import LanguageSelector from './LanguageSelector.js';
import Word from './Word.js';
import Buttons from './Buttons.js';
import Footer from './Footer.js';

class App extends React.Component {
  state = {
    currentWord: '',
    letters: [],
    guessesLeft: 9,
    language: 'en'
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

  showMsg = () => {
    if (
      this.state.currentWord
        .toUpperCase()
        .split('')
        .every(letter => this.state.letters.includes(letter))
    ) {
      return words[this.state.language].won;
    } else if (this.state.guessesLeft > 0) {
      return `${words[this.state.language].guessesLeft[0]} ${
        this.state.guessesLeft
      } ${words[this.state.language].guessesLeft[1]}`;
    } else {
      return words[this.state.language].lost;
    }
  };

  newGame = level => {
    const newWord =
      words[this.state.language][level][
        Math.floor(Math.random() * words[this.state.language][level].length)
      ];
    this.setState({
      currentWord: newWord,
      letters: [],
      guessesLeft: 9
    });
  };

  changeLanguage = lang => {
    this.setState(
      currentState => {
        return { language: lang };
      },
      () => {
        this.newGame('normal');
      }
    );
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
    this.newGame('normal');
  }

  render() {
    return (
      <div className="App">
        <LanguageSelector changeLanguage={this.changeLanguage} />
        <h1 id="title">{words[this.state.language].title}</h1>
        <Word
          currentWord={this.state.currentWord}
          letters={this.state.letters}
        />
        <p id="letters-guessed">{this.state.letters}</p>
        <Image guessesLeft={this.state.guessesLeft} />
        <p id="show-msg">{this.showMsg()}</p>
        <p id="start-new-game">{words[this.state.language].newGame}</p>
        <Buttons language={this.state.language} newGame={this.newGame} />
        <p id="celebration">{words[this.state.language].msg} 🌼 2020</p>
        <Footer />
      </div>
    );
  }
}

export default App;
