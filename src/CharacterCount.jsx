import React, {Component} from 'react';

class
CharacterCount 
extends 
Component {
constructor
(props) {
  super(props);

  this.state = {
    characterCount: 0,
  };
}

handleInputChange=(event)=>{this.setState({characterCount: event.target.value.length});}

render() {
  return <div className="CharacterCount">
    <input 
    type='text'
    onChange={this.handleInputChange}
    >
    </input>
    </div>;
}
}
