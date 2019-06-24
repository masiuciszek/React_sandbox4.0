/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './joke.css';

const Joke = ({ text, vote, voteUp, voteDown }) => {
  const colourChange = () => {
    if (vote >= 12) {
      return 'rgba(46, 204, 113, 1)';
    }
    if (vote >= 9) {
      return '#eeee00';
    }
    if (vote >= 6) {
      return '#f0ff00';
    }
    if (vote >= 3) {
      return '#e67e22';
    }
    return '#f03434';
  };

  const smileChange = () => {
    if (vote >= 12) {
      return 'em em-sunglasses';
    }
    if (vote >= 9) {
      return 'em em-smile';
    }
    if (vote >= 6) {
      return 'em em-worried';
    }
    if (vote >= 3) {
      return 'em em-cry';
    }
    return 'em em-crying_cat_face';
  };

  return (
    <div className="joke">
      <div className="joke-btns">
        <i className="fas fa-arrow-up" onClick={voteUp} />
        <span className="vote" style={{ borderColor: colourChange() }}>
          {vote}
        </span>
        <i className="fas fa-arrow-down" onClick={voteDown} />
      </div>

      <div className="joke-text">{text}</div>

      <div className="joke-smiley">
        <i className={smileChange()} />
      </div>
    </div>
  );
};
Joke.propTypes = {
  text: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

export default Joke;
