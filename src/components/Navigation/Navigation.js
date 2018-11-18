import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ pages }) => (
  <nav className="nav-bar">
    <ul className="navigation-list">
      <li className="navigation-list-item">
        {pages.map(({ title, url }) => <NavLink to={url}>title</NavLink>)}
      </li>
    </ul>
  </nav>
)

export default Navigation
