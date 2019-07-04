import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-5 ">
      <Link to="/" className="navbar-brand mb-0 h1 mx-auto">
        <span style={{ fontSize: 20 }}>LyricFidner</span>
      </Link>
    </nav>
  );
};

export default Navbar;
