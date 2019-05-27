import React from 'react';

// title
// desc
// emoji


 export default class Card extends React.Component{
   render(){
     return(
      <div className="card">
        <h1>{this.props.card.title}</h1>
        <h3>{this.props.card.desc}</h3>
        <h5>{this.props.card.emoji}</h5>
      </div>
     )
   }
 } 
