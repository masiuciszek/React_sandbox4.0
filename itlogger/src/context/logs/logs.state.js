import React, { createContext, useReducer } from 'react';
import Axios from 'axios';
import logsReducer from './logs.reducer';
import {
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING,
  DELETE_LOG,
  ADD_LOG,
  SEARCH_LOGS,
} from '../types';

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

  const removeLog = async id => {
    try {
      await Axios.delete(`/logs/${id}`);
      dispatch({ type: DELETE_LOG, payload: id });
    } catch (err) {
      dispatch({ type: LOGS_ERROR, payload: err.response });
    }
  };

  const addLog = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      setLoading();
      const res = await Axios.post('/logs', formData, config);
      dispatch({ type: ADD_LOG, payload: res.data });
    } catch (error) {
      dispatch({ type: LOGS_ERROR });
    }
  };

  const searchLogs = async text => {
    try {
      const res = await Axios(`/logs?q=${text}`);
      dispatch({ type: SEARCH_LOGS, payload: res.data });
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
        removeLog,
        addLog,
        searchLogs,
      }}
    >
      {props.children}
    </LogContext.Provider>
  );
};

export default LogProvider;
