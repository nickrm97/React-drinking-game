import React, { Component } from 'react';
import { render } from 'react-dom';
import Card from './Card';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {  
      deck: [
        {emoji: "heart", title: "Drink Twice", desc: "hello there my friends"},
        {emoji: "smile", title: "Skull drink", desc: "this card at all"},
        {emoji: "rainbow", title: "Eat Food", desc: "this card is fun"}
        ],
      currentCard: {},
      gameState: "selecting" // Selecting, starting, playing, end
      // At end, use a new deck or start again.
    };
  }

  retrieveNewCard = () => {
    const deck = this.state.deck;
    if (deck.length) {
      const currentCard = deck.pop();
      this.setState({currentCard});
    }
    else {
      this.setState({gameState: "end"})
    }
  }

  render() {
    return (
      <div>
        <Card card={this.state.currentCard} />
        <button onClick={this.retrieveNewCard}>Click me</button>
        {this.state.gameState}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
