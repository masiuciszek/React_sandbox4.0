import React from 'react';
import { Link } from 'react-router-dom';

function Track({
  track: { track_name, album_name, artist_name, track_edit_url, track_id }
}) {
  return (
    <div className="col-md-6 ">
      <div
        className="card border-primary mb-3 text-white"
        style={{ minHeight: 300 }}
      >
        <div className="card-header">
          <h3 style={{ fontSize: '20px' }}>Artis: {artist_name}</h3>
        </div>
        <div className="card-body">
          <h4 className="card-title" style={{ fontSize: 18 }}>
            {' '}
            <i className="fas fa-play" /> Track: {track_name}
          </h4>
          <p className="lead">
            {' '}
            <i className="fas fa-music" /> Album: {album_name}
          </p>
        </div>
        <Link to={`lyrics/track/${track_id}`} className="btn btn-primary">
          <i className="fas fa-arrow-right mr-3" />
          View Lyrics
        </Link>
      </div>
    </div>
  );
}

export default Track;
