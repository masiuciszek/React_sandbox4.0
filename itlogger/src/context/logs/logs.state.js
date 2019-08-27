import React, { createContext, useReducer } from 'react';
import Axios from 'axios';
import logsReducer from './logs.reducer';
import { GET_LOGS, LOGS_ERROR, SET_LOADING } from '../types';

export const LogContext = createContext();

const LogProvider = props => {
  const initialState = {
    logs: null,
    loading: false,
    current: null,
    error: null,
  };
  const [state, dispatch] = useReducer(logsReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const getLogs = async () => {
    try {
      setLoading();
      const res = await Axios.get('/logs');
      dispatch({ type: GET_LOGS, payload: res.data });
    } catch (err) {
      dispatch({ type: LOGS_ERROR, payload: err.response });
    }
  };
  return (
    <LogContext.Provider
      value={{
        logs: state.logs,
        loading: state.loading,
        current: state.current,
        error: state.error,
        getLogs,
      }}
    >
      {props.children}
    </LogContext.Provider>
  );
};

export default LogProvider;
