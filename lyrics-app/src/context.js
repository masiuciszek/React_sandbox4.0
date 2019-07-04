import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import LyricReducer from './reducer';
import { GET_LYRICS, GET_TRACKS, GET_TRACK, SEARCH_TRACK } from './types';

export const LyricContext = createContext();

function LyricProvider({ children }) {
  const initialState = {
    tracks: [],
    heading: 'Top 10 Tracks',
    track: {},
    lyrics: {}
  };

  const [state, dispatch] = useReducer(LyricReducer, initialState);

  const getTracks = async () => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    );
    dispatch({
      type: GET_TRACKS,
      payload: res.data.message.body.track_list
    });
  };

  const getLyrics = async id => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    );
    dispatch({
      type: GET_LYRICS,
      payload: res.data.message.body.lyrics
    });
  };

  const getTrack = async id => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    );
    dispatch({
      type: GET_TRACK,
      payload: res.data.message.body.track
    });
  };

  const searchLyric = async trackTitle => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    );
    dispatch({
      type: SEARCH_TRACK,
      payload: res.data.message.body.track_list
    });
  };

  return (
    <LyricContext.Provider
      value={{
        tracks: state.tracks,
        heading: state.heading,
        track: state.track,
        lyrics: state.lyrics,
        getTracks,
        getLyrics,
        getTrack,
        searchLyric
      }}
    >
      {children}
    </LyricContext.Provider>
  );
}

export default LyricProvider;
