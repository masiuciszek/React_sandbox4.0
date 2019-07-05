import React from 'react';
import './App.css';
import ClassToggle from './components/ClassToggle';
import HooksToggle from './components/HooksToggle';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HooksCounter';
import ClassForm from './components/ClassForm';
import HookForm from './components/HookForm';
import SimpleFormUseHook from './components/SimpleFormUseHook';
import TitleCount from './components/TitleCount';
import StarWarsMovies from './components/StarWarsMovies';

export default function App() {
  return (
    <div className="App">
      <h1>React Hooks World</h1>
      <StarWarsMovies />
      <TitleCount />
      <ClassToggle />
      <ClassCounter />
      <ClassForm />
      <HooksToggle />
      <HooksCounter />
      <HookForm />
      <SimpleFormUseHook />
    </div>
  );
}
