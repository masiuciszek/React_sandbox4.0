import { GET_JOKES, VOTE } from './types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_JOKES:
      return {
        ...state,
        jokes: payload,
        loading: false,
      };
    case VOTE:
      const { id, delta } = payload;
      return {
        ...state,
        jokes: state.jokes.map(joke =>
          joke.id === id ? { ...joke, vote: joke.vote + delta } : joke
        ),
      };
    default:
      return state;
  }
};
