import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/ThemeContext';

const ToggleTheme = ({ btnText }) => {
  const themeContext = useContext(ThemeContext);
  const { toggleTheme } = themeContext;

  return (
    <>
      <button type="button" onClick={toggleTheme}>
        {btnText}
      </button>
    </>
  );
};

ToggleTheme.propTypes = {
  btnText: PropTypes.string.isRequired,
};

export default ToggleTheme;
