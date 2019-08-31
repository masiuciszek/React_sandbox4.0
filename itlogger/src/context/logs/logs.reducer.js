import {
  GET_LOGS,
  SET_LOADING,
  DELETE_LOG,
  ADD_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [payload, ...state.logs],
        loading: false,
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== payload),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
