import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const MovieList = () => {
  const themeContext = useContext(ThemeContext);

  const { light, dark, themeBg } = themeContext;

  const theme = themeBg ? light : dark;

  return (
    <div className="movies" style={{ background: theme.bg, color: theme.hex }}>
      <h1>Movies</h1>
      <ul className="movie-list">
        <li style={{ background: theme.ui }}>Dark-knight</li>
        <li style={{ background: theme.ui }}>Harry Potter</li>
        <li style={{ background: theme.ui }}>Lord of the rings</li>
        <li style={{ background: theme.ui }}>Happy Gilmore</li>
      </ul>
    </div>
  );
};

export default MovieList;
