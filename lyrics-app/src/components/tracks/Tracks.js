import React, { useContext, useEffect } from 'react';
import { LyricContext } from '../../context';
import Track from './Track';
export default function Tracks() {
  const lyricContext = useContext(LyricContext);

  const { getTracks, tracks } = lyricContext;

  useEffect(() => {
    getTracks();
  }, []);

  const renderTracks = () => {
    if (tracks === undefined || tracks.length === 0) {
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
      return tracksData;
    }
  };

  const tracksData = tracks.map(t => (
    <Track key={t.track.track_id} track={t.track} />
  ));

  return (
    <>
      <h1 className="text-center mb-3">Tracks</h1>
      <div className="row">{renderTracks()}</div>
    </>
  );
}
