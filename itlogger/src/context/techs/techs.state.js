import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import TechReducer from './techs.reducer';
import { GET_TECHS, SET_LOADING, TECHS_ERROR, DELETE_TECH, ADD_TECH } from '../types';

export const TechContext = createContext();
const TechProvider = props => {
  const initialState = {
    techs: null,
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(TechReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const getTechs = async () => {
    try {
      setLoading();
      const res = await axios.get('/techs');
      dispatch({ type: GET_TECHS, payload: res.data });
    } catch (err) {
      dispatch({ type: TECHS_ERROR, payload: err.message });
    }
  };

  const addTech = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      setLoading();
      const res = await axios.post('/techs',formData,config)
      dispatch({type: ADD_TECH, payload: res.data})
    } catch (err) {
      dispatch({type: TECHS_ERROR, payload: err.message})
    }
  }

  const deleteTech = async (id) => {
    try {
      setLoading()
      await axios.delete('/techs/'+id)
      dispatch({type: DELETE_TECH, payload: id})
    } catch (err) {
      dispatch({ type: TECHS_ERROR, payload: err.message });
    }
  }

  return (
    <TechContext.Provider
      value={{
        techs: state.techs,
        loading: state.loading,
        error: state.error,
        getTechs,
        addTech,
        deleteTech
      }}
    >
      {props.children}
    </TechContext.Provider>
  );
};

export default TechProvider;
