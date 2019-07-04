import React, { useContext, useState } from 'react';
import { LyricContext } from '../../context';

function Search() {
  const lyricContext = useContext(LyricContext);

  const { searchLyric, tracks } = lyricContext;

  const [trackTitle, setTrackTitle] = useState('');

  const handleChange = e => setTrackTitle(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    searchLyric(trackTitle);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music mr-4" />
        Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            name="tracktitle"
            value={trackTitle}
            onChange={e => handleChange(e)}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          {' '}
          Get Track lyrics
        </button>
      </form>
    </div>
  );
}

export default Search;
