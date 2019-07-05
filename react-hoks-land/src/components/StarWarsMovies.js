import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarWarsMovies = () => {
  const [num, setNum] = useState(1);
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://swapi.co/api/films/${num}`);
      setMovie(res.data);
      console.log(res.data);
    };
    getData();
  }, [num]);

  return (
    <div className="container">
      <h1>Pick a movie</h1>
      <h3>You choose: {movie.title}</h3>
      <p>{movie.opening_crawl}</p>
      <select name="num" value={num} onChange={e => setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
};

export default StarWarsMovies;
