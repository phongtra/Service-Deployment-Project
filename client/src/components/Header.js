import React from 'react';
import { connect } from 'react-redux';

const renderHeader = props => {
  switch (props.user) {
    case null:
      return (
        <div className="ui placeholder">
          <div className="header">
            <div className="line" />
            <div className="line" />
          </div>
        </div>
      );
    case false:
      return (
        <div className="ui secondary menu">
          <h1
            style={{ textAlign: 'center', marginTop: '5vh' }}
            className="ui header"
          >
            Welcome to Authenticated
          </h1>
          <div className="right menu">
            <a className="ui item" href="/auth/google">
              Sign In with Google
            </a>
          </div>
        </div>
      );
    default:
      return (
        <div className="ui secondary menu">
          <h1
            style={{ textAlign: 'center', marginTop: '5vh' }}
            className="ui header"
          >
            Authentication
          </h1>
          <div className="right menu">
            <a className="ui item" href="/api/logout">
              Logout
            </a>
          </div>
        </div>
      );
  }
};
const Header = props => {
  return renderHeader(props);
};

const mapStateToProps = ({ auth }) => {
  return { user: auth.authenticated };
};

export default connect(mapStateToProps)(Header);
