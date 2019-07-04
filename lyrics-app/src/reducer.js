import { GET_LYRICS, GET_TRACKS, GET_TRACK, SEARCH_TRACK } from './types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TRACKS:
      return {
        ...state,
        tracks: action.payload
      };
    case GET_TRACK:
      return {
        ...state,
        track: payload
      };
    case GET_LYRICS:
      return {
        ...state,
        lyrics: payload
      };
    case SEARCH_TRACK:
      return {
        ...state,
        tracks: payload,
        heading: 'Search Results'
      };
    default:
      return state;
  }
};
