import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Form from './Form';

const EditForm = props => {
  useEffect(() => {
    props.fetchInfos();
  }, []);
  const onDelete = id => {
    props.deleteInfo(id, () => {
      props.history.push('/');
    });
  };
  const onSubmit = formValues => {
    props.editInfo(props.info._id, formValues, () => {
      props.history.push('/');
    });
  };
  return (
    <div>
      <Form onSubmit={onSubmit} initialValues={props.info}>
        <button
          onClick={() => {
            onDelete(props.info._id);
          }}
          className="ui button red"
        >
          Delete
        </button>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ infos }, ownProps) => {
  return { info: infos.find(info => info._id === ownProps.match.params.id) };
};

export default connect(
  mapStateToProps,
  actions
)(EditForm);
