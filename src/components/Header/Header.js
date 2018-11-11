import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="nav-bar">
      <ul className="list-items">
        <li className="list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
