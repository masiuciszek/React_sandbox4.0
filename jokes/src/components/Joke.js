import React from 'react';
import PropTypes from 'prop-types';
import './joke.css';

const Joke = ({ text, vote }) => {
  return (
    <div className="joke">
      <div className="joke-btns">
        <i className="fas fa-arrow-up" />
        <span className="vote">{vote}</span>
        <i className="fas fa-arrow-down" />
      </div>

      <div className="joke-text">{text}</div>

      <div className="joke-smiley">
        <i class="em em-last_quarter_moon_with_face" />
      </div>
    </div>
  );
};

export default Joke;
