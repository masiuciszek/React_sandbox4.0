import React from 'react';
import { GlobalStyle } from '../styled/Global';
import SearchBar from './Searchbar';

const Layout = props => (
  <>
    <GlobalStyle />
    <SearchBar />
    {props.children}
  </>
);

export default Layout;
