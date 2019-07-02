import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="main">{children}</main>
  </>
);

export default Layout;
