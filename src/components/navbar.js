import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar-math">
      <h3> LOGO MAG</h3>
      <ul className="navbar-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/calculator">
          <li>Calculator</li>
        </Link>
        <Link to="/quote">
          <li>Quote</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
