import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ToggleTheme from '../ToggleTheme';

const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  const { light, dark, themeBg } = themeContext;

  const theme = themeBg ? light : dark;

  return (
    <nav className="nav" style={{ background: theme.ui, color: theme.hex }}>
      <h4>Context App</h4>
      <ul className="nav-list">
        <li>
          <a style={{ color: theme.hex }} href="!#">
            Home{' '}
          </a>
        </li>
        <li>
          <a style={{ color: theme.hex }} href="!#">
            About{' '}
          </a>
        </li>
        <li>
          <a style={{ color: theme.hex }} href="!#">
            Contact{' '}
          </a>
        </li>
      </ul>
      <ToggleTheme btnText="Toggle Theme" />
    </nav>
  );
};
export default Navbar;
