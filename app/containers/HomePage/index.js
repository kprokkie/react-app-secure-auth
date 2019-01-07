/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// http://localhost:3000/callback#access_token=Q19nGf2Yk9Sx-YuFRfedWLd3OKcmjyqS&expires_in=7200&token_type=Bearer&state=TNg6.mOkB1AnQ.ZoQr8wpqQYUQnFF8Y7&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik56VTJOakZDUkRjME9EVkROa1ZFTmtGRE5FRXpOak0zTURRMU1FWXpNVFF4TVRnNFJVWkVOdyJ9.eyJnaXZlbl9uYW1lIjoiUHJhZGVlcCIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJuaWNrbmFtZSI6Imt1bWFycHJhZGVlcDEwMTAiLCJuYW1lIjoiUHJhZGVlcCBLdW1hciIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLTNlZW9XV0lWem5RL0FBQUFBQUFBQUFJL0FBQUFBQUFBSHlvL2swZ09SY20zRWNZL3Bob3RvLmpwZyIsImdlbmRlciI6Im1hbGUiLCJsb2NhbGUiOiJlbi1HQiIsInVwZGF0ZWRfYXQiOiIyMDE5LTAxLTA1VDA0OjM0OjA1LjUxMloiLCJlbWFpbCI6Imt1bWFycHJhZGVlcDEwMTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8va3Byb2traWUtZGV2LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDA3NTM5MDg2NjMzNjgzMDAyMyIsImF1ZCI6IkxDSUR3ZW1aT3NsUXJUUEI2cDRkeHpNMEE0QUpEeDBZIiwiaWF0IjoxNTQ2NjYyOTA4LCJleHAiOjE1NDY2OTg5MDgsImF0X2hhc2giOiJtT041eUhpTkR4S0lfV1hMMUphQWhBIiwibm9uY2UiOiJqcUNoYmlieU4xOE1NRWJiS0o1cWpxOXYwNHVRYmI4RyJ9.e5ljRZ8dOY-hvGtn6q0lj8fxi1uix6PatVKyzAEHNXjlGBmSjHXXwR_TQ1x9mK9_oN8Sz1V6R6sbNtS_bnzjhe9T2ibIZvR7lBXFeSQt8ErPYuIK6cfZcB6zThoBpUsqIijd-2UOaNfCTchpAPPzJcCxeXRIhnmdvgwndeLLNz6JsNjuWJwBJbqcsskKHdwDbqL2siJm1YUYLXNW7IuI6qHTMs7ipCynlb8yEMJTpdLHmvd1NBt8GS1pJNg24vAncWhOcw_zcOH2S_FUL009-nSSPKJgGktrNwXH544qRJD9c9KHghBMDGQlwTo8TA2G1tNV5M9DwEShIADriLOfWw
// access_token=Q19nGf2Yk9Sx-YuFRfedWLd3OKcmjyqS&expires_in=7200&token_type=Bearer&state=TNg6.mOkB1AnQ.ZoQr8wpqQYUQnFF8Y7&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik56VTJOakZDUkRjME9EVkROa1ZFTmtGRE5FRXpOak0zTURRMU1FWXpNVFF4TVRnNFJVWkVOdyJ9.eyJnaXZlbl9uYW1lIjoiUHJhZGVlcCIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJuaWNrbmFtZSI6Imt1bWFycHJhZGVlcDEwMTAiLCJuYW1lIjoiUHJhZGVlcCBLdW1hciIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLTNlZW9XV0lWem5RL0FBQUFBQUFBQUFJL0FBQUFBQUFBSHlvL2swZ09SY20zRWNZL3Bob3RvLmpwZyIsImdlbmRlciI6Im1hbGUiLCJsb2NhbGUiOiJlbi1HQiIsInVwZGF0ZWRfYXQiOiIyMDE5LTAxLTA1VDA0OjM0OjA1LjUxMloiLCJlbWFpbCI6Imt1bWFycHJhZGVlcDEwMTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8va3Byb2traWUtZGV2LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDA3NTM5MDg2NjMzNjgzMDAyMyIsImF1ZCI6IkxDSUR3ZW1aT3NsUXJUUEI2cDRkeHpNMEE0QUpEeDBZIiwiaWF0IjoxNTQ2NjYyOTA4LCJleHAiOjE1NDY2OTg5MDgsImF0X2hhc2giOiJtT041eUhpTkR4S0lfV1hMMUphQWhBIiwibm9uY2UiOiJqcUNoYmlieU4xOE1NRWJiS0o1cWpxOXYwNHVRYmI4RyJ9.e5ljRZ8dOY-hvGtn6q0lj8fxi1uix6PatVKyzAEHNXjlGBmSjHXXwR_TQ1x9mK9_oN8Sz1V6R6sbNtS_bnzjhe9T2ibIZvR7lBXFeSQt8ErPYuIK6cfZcB6zThoBpUsqIijd-2UOaNfCTchpAPPzJcCxeXRIhnmdvgwndeLLNz6JsNjuWJwBJbqcsskKHdwDbqL2siJm1YUYLXNW7IuI6qHTMs7ipCynlb8yEMJTpdLHmvd1NBt8GS1pJNg24vAncWhOcw_zcOH2S_FUL009-nSSPKJgGktrNwXH544qRJD9c9KHghBMDGQlwTo8TA2G1tNV5M9DwEShIADriLOfWw
// https://jwt.io/

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {

  // handleLogin = () => {
  //   this.props.auth.login();
  // }

  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    // console.log(this.props);
    return (
      <div>
        <h1>
          <div>This is Home Page.</div>
        </h1>
        {/* {this.props.auth.isAuthenticated() ? <Link to="/profile">View Profile</Link> : <button type="submit" onClick={this.handleLogin}>Log In</button>} */}
        {
          isAuthenticated() ?
            <Link to="/profile">View Profile</Link> :
            <button type="submit" onClick={isAuthenticated() ? logout : login}>
              {isAuthenticated() ? 'Log Out' : 'Log In'}
            </button>
        }
      </div>
    );
  }
}
