import React, { createContext, useReducer } from 'react';
import TechReducer from './techs.reducer';

export const TechContext = createContext();
const TechProvider = props => {
  const initialState = {
    techs: null,
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(TechReducer, initialState);
  return (
    <TechContext.Provider
      value={{
        techs: state.techs,
        loading: state.loading,
        error: state.error,
      }}
    >
      {props.children}
    </TechContext.Provider>
  );
};

export default TechProvider;
