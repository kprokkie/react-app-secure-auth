/**
 *
 * NavigationContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Navigation from '../../components/Navigation';

/* eslint-disable react/prefer-stateless-function */
export class NavigationContainer extends React.PureComponent {
  render() {
    return <Navigation {...this.props}/>;
  }
}

NavigationContainer.propTypes = {
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

export default compose(withConnect)(NavigationContainer);
