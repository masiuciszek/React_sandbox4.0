import React, { Component } from 'react';

export default class ClassToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      master: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prev => ({ master: !prev.master }));
  }

  render() {
    const { master } = this.state;
    return (
      <div className="container">
        <h2>Class based Toggle</h2>
        <h3>Hello {master ? 'Master 🤩' : ' Loser   🤪 '} </h3>
        <button type="button" onClick={this.handleToggle}>
          Toggle Title above {'↑'}{' '}
        </button>
      </div>
    );
  }
}
