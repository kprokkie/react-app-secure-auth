/**
 *
 * CallbackContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

/* eslint-disable react/prefer-stateless-function */
export class CallbackContainer extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    // handle authentication if expected values are available in callback url
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication(this.props.history);
    } else {
      throw new Error('Invalid Callback URL');
    }
  }

  render() {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }
}

CallbackContainer.propTypes = {
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

export default compose(withConnect)(CallbackContainer);
