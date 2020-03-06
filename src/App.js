import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    currentWord: 'banana',
    letters: [] // an array of letters already guessed (wrong and right ones too)
  };

  handleKeyPress = event => {
    this.setState(currentState => {
      if (!currentState.letters.includes(event.key)) {
        return { letters: [...currentState.letters, event.key.toLowerCase()] };
      }
    });
  };

  showCurrentState = () => {
    let currentState = '';
    for (let i = 0; i < this.state.currentWord.length; i++) {
      if (this.state.letters.includes(this.state.currentWord[i])) {
        currentState = currentState.concat(this.state.currentWord[i]);
      } else {
        currentState = currentState.concat('_');
      }
      // console.log({ i }, { j });
      // console.log(typeof this.state.letters[j]);
    }
    return currentState
      .split('')
      .join(' ')
      .toUpperCase();
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <h1>Hang Man</h1>
        <p>{this.showCurrentState()}</p>
        <p>Tried Letters: {this.state.letters}</p>
        <p>Guesses left: so and so</p>
      </div>
    );
  }
}

export default App;
