import React, { useContext, useEffect } from 'react';
import { LyricContext } from '../../context';
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';

export default function Lyricks({ match }) {
  const lyricContext = useContext(LyricContext);

  const { getLyrics, lyrics, getTrack, track } = lyricContext;

  const { lyrics_body, pixel_tracking_url } = lyrics;
  const { track_name, artist_name, album_id, explicit, updated_time } = track;

  useEffect(() => {
    getLyrics(match.params.id);
    getTrack(match.params.id);
  }, []);

  const renderLyrics = () => {
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(lyrics).length === 0 ||
      Object.keys(track).length === 0
    ) {
      return (
        <div className="loading-wrapper">
          <div className="LoaderBalls">
            <div className="LoaderBalls__item" />
            <div className="LoaderBalls__item" />
            <div className="LoaderBalls__item" />
          </div>
        </div>
      );
    } else {
      return (
        <>
          <Link to="/" className="btn btn-warning btn-sm mb-4">
            Back Home
          </Link>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">
                {' '}
                {track_name} by{' '}
                <span className="text-primary"> {artist_name} </span>{' '}
              </h1>
              <div className="card-body">
                <p className="lead">{lyrics_body}</p>
              </div>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {album_id}
            </li>
            <li className="list-group-item">
              {' '}
              Explicit Words: {explicit === 0 ? 'No' : 'Yes'}
            </li>
            <li className="list-group-item">
              {' '}
              Last Updated Date: {updated_time}
            </li>
          </ul>
        </>
      );
    }
  };

  return <>{renderLyrics()}</>;
}
