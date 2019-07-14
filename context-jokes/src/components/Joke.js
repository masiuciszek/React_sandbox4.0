import React, { useContext } from 'react';
import styled from 'styled-components';
import { JokeContext } from '../context/joke.context';

export default function Joke({ text, vote, id }) {
  const { changeVote, changeBorderColour, changeSmile } = useContext(
    JokeContext
  );

  return (
    <JokeStyled>
      <div className="btn-list">
        <i className="em em---1" onClick={() => changeVote(id, +1)} />
        <span
          style={{ borderColor: changeBorderColour(vote) }}
          className="vote"
        >
          {vote}
        </span>
        <i className="em em--1" onClick={() => changeVote(id, -1)} />
      </div>
      <h4>{text}</h4>
      <div className="emotion">
        <i className={changeSmile(vote)} />
      </div>
    </JokeStyled>
  );
}

const JokeStyled = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 1.2rem;
  background: #454545;
  color: #fff;
  margin: 1rem 0;
  border-bottom: 2px solid #8542f8;
  border-top: 2px solid #8542f8;
  h4 {
    text-align: left;
    margin: 0 auto;
  }
  .btn-list {
    display: flex;
    i {
      font-size: 1.5rem;
      margin: 0.3rem 1rem;
      cursor: pointer;
    }
    .vote {
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      line-height: 5rem;
      border: 4px solid #8542f8;
      text-align: center;
      font-weight: 300;
      transition: 0.2s ease-in;
      font-size: 1.5rem;
      box-shadow: 2px 1px 2px 1px #333;
    }
  }
  .emotion {
    margin-left: auto;
    padding: 0 1rem;
    i {
      transition: 0.2s ease-in-out;
    }
  }
`;
