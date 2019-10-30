import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui pointing red basic label">
        <div>{error}</div>
      </div>
    );
  }
};

const renderInput = ({ input, label, meta }) => {
  return (
    <div className="eight wide field">
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};

const Form = props => {
  const onSubmit = formValues => {
    props.onSubmit(formValues);
  };
  return (
    <form
      onSubmit={props.handleSubmit(onSubmit)}
      style={{ marginTop: '17vh' }}
      className="ui form error"
    >
      <Field name="school" component={renderInput} label="School" />
      <Field name="major" component={renderInput} label="Major" />
      <Field name="gpa" component={renderInput} label="GPA" />
      <button className="ui button primary">Submit</button>
      <Link to="/" className="ui button orange">
        Back
      </Link>
      {props.children}
    </form>
  );
};

const validate = formValues => {
  const error = {};
  if (!formValues.school) {
    error.school = 'You must enter a school';
  }
  if (!formValues.major) {
    error.major = 'You must enter a major';
  }
  if (!formValues.gpa || isNaN(formValues.gpa)) {
    error.gpa = 'You must enter an gpa and it has to be number';
  }
  return error;
};

export default reduxForm({ form: 'Form', validate })(Form);
