/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { NavLink } from 'react-router-dom';

import './navbar.css';

const NavBar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Visitor
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/visitor-logs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Visitors Logs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/latest-news"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Latest News
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
