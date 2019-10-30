import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Form from './Form';

const CreateForm = ({ createInfo, history }) => {
  const onSubmit = formValues => {
    createInfo(formValues, () => {
      history.push('/');
    });
  };
  return <Form onSubmit={onSubmit} />;
};

export default connect(
  null,
  actions
)(CreateForm);
