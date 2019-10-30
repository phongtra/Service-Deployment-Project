import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Main from './Main';
import Header from './Header';
import CreateForm from './CreateForm';
import EditForm from './EditForm';

const App = ({ fetchUser, user }) => {
  useEffect(() => {
    const fetchUserOnMount = () => fetchUser();
    fetchUserOnMount();
    // eslint-disable-next-line
  }, []);
  const renderRoot = () => {
    switch (user) {
      case null:
        return <h1>Loading</h1>;
      case false:
        return <Landing />;
      default:
        return <Main />;
    }
  };
  return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={renderRoot} />
          <Route path="/form" exact component={CreateForm} />
          <Route path="/info/edit/:id" exact component={EditForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { user: auth.authenticated };
};

export default connect(
  mapStateToProps,
  actions
)(App);
