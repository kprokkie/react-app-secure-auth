/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './styles.scss';

function Navigation({ auth }) {
  // console.log(auth);
  const { isAuthenticated, login, logout } = auth;
  // console.log(isAuthenticated());
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li>
          {isAuthenticated()}
            <button type="submit" onClick={isAuthenticated() ? logout : login}>
              {isAuthenticated() ? 'Log Out' : 'Log In'}
            </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {};

export default Navigation;
