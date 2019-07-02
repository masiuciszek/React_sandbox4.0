/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [state, setState] = useState({
    isLight: true,
    light: { hex: '#333', ui: '#ddd', bg: '#eee' },
    dark: { hex: '#ddd', ui: '#333', bg: '#555' },
  });
  const [themeBg, setThemeBg] = useState(true);

  const toggleTheme = () => {
    setThemeBg(!themeBg);
  };

  return (
    <ThemeContext.Provider value={{ ...state, themeBg, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ThemeProvider;
