/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import logo from '../img/smile.svg';
import Joke from './Joke';
import './jokelist.css';

function JokeList(props) {
  const [jokes, setJokes] = useState(
    JSON.parse(window.localStorage.getItem('jokes') || '[]')
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (jokes.length === 0) return getJokes();
  }, []);

  const getJokes = async () => {
    const joke = [];

    while (joke.length < props.numOfJokes) {
      const res = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      joke.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }
    setJokes([...jokes, ...joke], () =>
      window.localStorage.setItem('jokes', JSON.stringify(jokes))
    );



    setLoading(false);
    window.localStorage.setItem('jokes', JSON.stringify(joke));
  };

  const handleVote = (id, delta) => {
    setJokes(
      jokes.map(
        j => (j.id === id ? { ...j, votes: j.votes + delta } : j),
        () => window.localStorage.setItem('jokes', JSON.stringify(jokes))
      )
    );
  };

  const handleClick = () => {
    setLoading(true, getJokes());
  };
  console.log(jokes);

  const renderJokes = () =>
    jokes.map(j => (
      <Joke
        key={j.id}
        text={j.text}
        vote={j.votes}
        voteUp={() => handleVote(j.id, 1)}
        voteDown={() => handleVote(j.id, -1)}
      />
    ));

  return (
    <div className="Jokelist">
      <div className="sidebar">
        <h1 className="jokelist-tilte">
          {' '}
          <span className="dad">Dad</span> Jokes{' '}
        </h1>
        <img src={logo} alt="smiley logo" />
        <button onClick={handleClick} type="button" className="add-joke-btn">
          Add Joke
        </button>
      </div>

      <div className="jokelist-jokes">
        {loading ? (
          <div className="loading">
            {' '}
            <i className="far fa-8x fa-laugh fa-spin" />{' '}
            <h1 className="jokelist-tilte">...Loading!!</h1>
          </div>
        ) : (
          renderJokes()
        )}
      </div>
    </div>
  );
}

JokeList.defaultProps = {
  numOfJokes: 10,
};

export default JokeList;
