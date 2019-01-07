/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './styles.scss';

/* eslint-disable react/prefer-stateless-function */
export class ProfilePage extends React.PureComponent {

  state = {
    profile: null,
    error: '',
    messagePublicApi: '',
    messagePrivateApi: ''
  };

  componentDidMount() {
    this.loadUserProfile();
    this.fetchPublicData();
    this.fetchPrivateData();
  }

  fetchPublicData() {
    fetch('http://localhost:3001/public')
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Public Network response error.');
      })
      .then(res => this.setState({ messagePublicApi: res.message }))
      .catch(err => this.setState({ messagePublicApi: err.message }));
  }

  fetchPrivateData() {
    fetch('http://localhost:3001/private', {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Private Network response error.');
      })
      .then(res => this.setState({ messagePrivateApi: res.message }))
      .catch(err => this.setState({ messagePrivateApi: err.message }));
  }

  loadUserProfile() {
    this.props.auth.getUserProfile((profile, error) => {
      this.setState({ profile, error });
    });
  }

  render() {
    const { profile, messagePublicApi, messagePrivateApi } = this.state;
    if (!profile) return null;
    return (
      <div>
        <h1>
          <div>This is Profile Page.</div>
        </h1>
        <h2>{`Hello ${profile.given_name} ${profile.family_name} !!`}</h2>
        <h4>Public API Response: {messagePublicApi}</h4>
        <h4>Private API Response: {messagePrivateApi}</h4>
        <div>
          <img className="profile-pic" src={profile.picture} />
          <p>{profile.nickname}</p>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfilePage);
