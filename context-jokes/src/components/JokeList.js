/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { JokeContext } from '../context/joke.context';
import Joke from './Joke';
import Spinner from './Spinner';

function JokeList() {
  const { jokes, getJokes, sortedJokes, loading } = useContext(JokeContext);
  useEffect(() => {
    getJokes();
  }, []);

  return (
    <JokeListWrapper>
      <aside>
        <h4>
          Memes <span>Jokes</span>
        </h4>
        <i className="em em-blush" />
        <button type="button" onClick={getJokes}>
          Get 10 new Jokes
        </button>
      </aside>
      {loading ? (
        <Spinner />
      ) : (
        <JokeWrapper>
          {sortedJokes(jokes).map(j => (
            <Joke key={j.id} text={j.text} id={j.id} vote={j.vote} />
          ))}
        </JokeWrapper>
      )}
    </JokeListWrapper>
  );
}

const JokeListWrapper = styled.main`
  display: flex;
  width: 80%;
  height: 80%;
  aside {
    background: #5333ed;
    display: flex;
    flex-direction: column;
    box-shadow: 3px 6px 11px -1px rgba(185, 49, 248, 0.795);
    z-index: 2;
    justify-content: center;
    align-items: center;
    width: 25%;
    h4 {
      color: #fff;
      font-size: 3rem;
      margin: 1rem 0;
      border-bottom: 2px solid #fff;
      font-weight: 500;
      color: #fff;
      span {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: rgba(185, 49, 248, 0.795);
        text-shadow: 1px 1px #2222;
      }
    }
    i {
      font-size: 5rem;
      margin: 0.5rem;
      border-radius: 50%;
      box-shadow: 3px 6px 11px -1px rgba(185, 49, 248, 0.795);
      padding: 1rem;
    }
    button {
      margin: 1.5rem 0;
      padding: 0.7rem 1.1rem;
      border: 2px solid #fff;
      font-size: 1.3rem;
      background: #654ea3; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #eaafc8,
        #654ea3
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #eaafc8,
        #654ea3
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      color: #fff;
      position: relative;
      transition: 0.2s ease-in-out;
      box-shadow: 2px 1px 1px 2px rgba(15, 19, 18, 0.495);
      cursor: pointer;
      &:hover {
        border: 2px solid #fede;
        box-shadow: 5px 5px 3px 4px rgba(15, 19, 48, 0.695);
      }
      &:active {
        top: 5px;
      }
    }
  }
`;

const JokeWrapper = styled.div`
  background: beige;
  height: 90%;
  width: 75%;
  overflow: scroll;
  box-shadow: 6px 2px 28px -1px rgba(250, 58, 250, 0.247);
  align-self: center;
`;

export default JokeList;
