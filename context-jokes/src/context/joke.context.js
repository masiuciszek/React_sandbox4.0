import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import JokeReducer from './joke.reducer';
import { GET_JOKES, VOTE } from './types';

export const JokeContext = createContext();

export default function JokeProvider(props) {
  const initialState = {
    jokes: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(JokeReducer, initialState);

  const getJokes = async () => {
    const jokes = [];
    const unique = new Set(jokes.map(j => j.text));
    while (jokes.length <= 10) {
      const res = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      const newJoke = res.data.joke;
      if (!unique.has(newJoke)) {
        jokes.push({ id: uuid(), text: res.data.joke, vote: 0 });
      } else {
        console.log('Found a duplicate');
        console.log(newJoke);
      }
    }
    dispatch({
      type: GET_JOKES,
      payload: jokes,
    });
  };



  const sortedJokes = jokes => jokes.sort((a, b) => b.vote - a.vote);

  const changeVote = (id, delta) => {
    dispatch({ type: VOTE, payload: { id, delta } });
  };

  const changeBorderColour = vote => {
    if (vote >= 9) {
      return 'green';
    }
    if (vote >= 6) {
      return 'orange';
    }
    if (vote >= 3) {
      return 'yellow';
    }
    if (vote >= 2) {
      return 'red';
    }
    return 'tomato';
  };
  const changeSmile = vote => {
    if (vote >= 10) {
      return 'em em-sunglasses';
    }
    if (vote >= 7) {
      return 'em em-blush';
    }
    if (vote >= 4) {
      return 'em em-disappointed';
    }
    if (vote >= 2) {
      return 'em em-worried';
    }
    return 'em em-sob';
  };

  return (
    <JokeContext.Provider
      value={{
        jokes: state.jokes,
        loading: state.loading,
        getJokes,
        changeVote,
        changeBorderColour,
        changeSmile,
        sortedJokes,
      }}
    >
      {props.children}
    </JokeContext.Provider>
  );
}

JokeProvider.defaultProps = {
  numOfJokes: 10,
};
