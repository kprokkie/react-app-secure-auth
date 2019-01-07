/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../HomePage/Loadable';
import ProfilePage from '../ProfilePage/Loadable';
import NavigationContainer from '../NavigationContainer';
import CallbackContainer from '../CallbackContainer';
import NotFoundPage from '../NotFoundPage/Loadable';

import Auth from '../../auth/Auth';

import GlobalStyle from '../../global-styles';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // need to pass to home component 
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <div>
        <NavigationContainer auth={this.auth} />
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/" render={props => <HomePage auth={this.auth} {...props} />} />
          {/* <Route exact path="/callback" component={CallbackContainer} /> */}
          <Route exact path="/callback" render={props => <CallbackContainer auth={this.auth} {...props} />} />
          {/* <Route exact path="/profile" component={ProfilePage} /> */}
          {/* <Route exact path="/profile" render={props => <ProfilePage auth={this.auth} {...props} />} /> */}
          <Route exact path="/profile" render={props =>
            this.auth.isAuthenticated() ?
              <ProfilePage auth={this.auth} {...props} /> :
              <Redirect to="/" />
          } />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}
