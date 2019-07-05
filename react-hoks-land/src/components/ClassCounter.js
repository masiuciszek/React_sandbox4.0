import React, { Component } from 'react';

export default class ClassConter extends Component {
  state = {
    count: 0,
  };

  handleCount = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h2>Class Counter!!</h2>
        <h3>Num is: {count}</h3>
        <button type="button" onClick={this.handleCount}>
          Add To Count
        </button>
      </div>
    );
  }
}
