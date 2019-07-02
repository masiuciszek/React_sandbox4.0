import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import MovieList from './components/MovieList';
import ThemeContext from './context/ThemeContext';

export default function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Layout>
          <MovieList />
        </Layout>
      </ThemeContext>
    </div>
  );
}
