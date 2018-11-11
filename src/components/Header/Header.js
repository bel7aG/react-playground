import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ me }) => (
  <header className="header">
    <nav className="nav-bar">
      <ul className="list-items">
        <li className="list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/About">About</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/react-16-2">react-16-2</NavLink>
        </li>
      </ul>
    </nav>
    {me.map((item) => <p>{item}</p>)}
  </header>
);

export default Header;
