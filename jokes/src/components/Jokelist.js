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

  let seenJokes = new Set(jokes.map(j => j.text));

  const getJokes = async () => {
    try {
      const joke = [];
      while (joke.length < props.numOfJokes) {
        const res = await axios.get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' }
        });
        let newJoke = res.data.joke;
        if (!seenJokes.has(newJoke)) {
          joke.push({ id: uuid(), text: newJoke, votes: 0 });
        } else {
          console.log('Found a dublicate');
          console.log(newJoke);
        }
      }
      setJokes([...jokes, ...joke], () =>
        window.localStorage.setItem('jokes', JSON.stringify(jokes))
      );

      setLoading(false);
      window.localStorage.setItem('jokes', JSON.stringify(joke));
    } catch (err) {
      console.error(err.message);
      setLoading(false);
    }
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
  let sortedJokes = jokes.sort((a, b) => b.votes - a.votes);
  const renderJokes = () =>
    sortedJokes.map(j => (
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
          Fetch Jokes
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
  numOfJokes: 10
};

export default JokeList;
