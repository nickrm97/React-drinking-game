import React from 'react';

 export default class Card extends React.Component{
   render(){
     return(
       <>
          <h1>{this.props.card.title}</h1>
     </>)
   }

 } 
