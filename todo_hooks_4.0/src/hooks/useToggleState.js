import { useState } from 'react';

export default (initialState = false) => {
  const [state, toggleState] = useState(initialState);

  const toggle = () => {
    toggleState(!state);
  };

  return [state, toggle];
};
