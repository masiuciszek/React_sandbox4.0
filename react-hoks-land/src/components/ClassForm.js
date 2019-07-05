import React, { Component } from 'react';

export default class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="container">
        <h2>React Class simple form</h2>
        <h4>You entered : {name} </h4>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick} type="submit">
          Clear
        </button>
      </div>
    );
  }
}
