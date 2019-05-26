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
        {emoji: "rainbow", title: "Rainbow", desc: "this card is fun"}
        ],
      currentCard: {emoji: "test", title: "Hello bark", desc: "this card is fun"}
    };
  }

  // retrieveNewCard = () =>{
  //   if (this.state.deck)
  // }

  retrieveNewCard = () => {
    this.setState({deck: "bark"})
    console.log(this.state.deck)
  }

  render() {
    return (
      <div>
        <Card card={this.state.currentCard} />
        <button onSubmit={this.retrieveNewCard}>Click me</button>
        <p>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
