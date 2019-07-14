import React from 'react';
import JokeProvider from './context/joke.context';
import JokeList from './components/JokeList';
import './App.css';

export default function App() {
  return (
    <JokeProvider>
      <div className="App">
        <JokeList title="Mems Jokes!" />
      </div>
    </JokeProvider>
  );
}
