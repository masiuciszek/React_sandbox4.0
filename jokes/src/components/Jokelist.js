import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../img/smile.svg';
import uuid from 'uuid/v4';
import Joke from './Joke';

import './jokelist.css';

function JokeList(props) {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    getJokes();
  }, []);

  const getJokes = async () => {
    const joke = [];
    while (joke.length < props.numOfJokes) {
      const res = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      });
      joke.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }
    setJokes(joke);
  };

  return (
    <div className="Jokelist">
      <div className="sidebar">
        <h1>
          {' '}
          <span className="dad">Dad</span> Jokes{' '}
        </h1>
        <img src={logo} alt="smiley logo" />
        <button className="add-joke-btn">Add Joke</button>
      </div>

      <div className="jokelist-jokes">
        {jokes.map(j => (
          <Joke key={j.id} text={j.text} vote={j.votes} />
        ))}
      </div>
    </div>
  );
}

JokeList.defaultProps = {
  numOfJokes: 10
};

export default JokeList;
