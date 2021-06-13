/* eslint-disable react/prop-types */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Formik } from 'formik';
import * as Yup from 'yup';

import './index.css';

import { submitForm } from '../VisitorLogsPage/actions';

const HomePage = props => {
  const { submitVisitorForm, history } = props;

  return (
    <div className="form-container">
      <h1>Visitor Entry Form</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          typeOfVisit: '',
          personToVisit: '',
          dateOfEntry: moment().format('MMMM Do YYYY'),
          timeOfEntry: '',
          timeOfExit: '',
        }}
        onSubmit={async values => {
          submitVisitorForm(values);
          alert('Log added successfully!');
          history.push('/visitor-logs');
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Required'),
          email: Yup.string()
            .email()
            .required('Required'),
          typeOfVisit: Yup.string().required('Required'),
          personToVisit: Yup.string().required('Required'),
          timeOfEntry: Yup.string().required('Required'),
          timeOfExit: Yup.string().required('Required'),
        })}
      >
        {formProps => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = formProps;

          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={{ display: 'block' }}>
                Name
              </label>
              <input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <div className="form-item">
                <label htmlFor="email" style={{ display: 'block' }}>
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </div>

              <div className="form-item">
                <label htmlFor="typeOfVisit" style={{ display: 'block' }}>
                  Type Of Visit
                </label>
                <select
                  id="typeOfVisit"
                  value={values.typeOfVisit}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Select</option>
                  <option>Meeting</option>
                  <option>Delivery</option>
                  <option>Personal</option>
                </select>
                {errors.typeOfVisit && touched.typeOfVisit && (
                  <div className="input-feedback">{errors.typeOfVisit}</div>
                )}
              </div>

              <div className="form-item">
                <label htmlFor="personToVisit" style={{ display: 'block' }}>
                  Person To Visit
                </label>
                <input
                  id="personToVisit"
                  placeholder="Enter the person to visit"
                  type="text"
                  value={values.personToVisit}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.personToVisit && touched.personToVisit
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.personToVisit && touched.personToVisit && (
                  <div className="input-feedback">{errors.personToVisit}</div>
                )}
              </div>

              <div className="form-item">
                <label htmlFor="dateOfEntry" style={{ display: 'block' }}>
                  Date of Entry
                </label>
                <input
                  id="dateOfEntry"
                  type="text"
                  value={values.dateOfEntry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="text-input"
                  disabled
                />
              </div>

              <div className="form-item">
                <label htmlFor="timeOfEntry" style={{ display: 'block' }}>
                  Time of Entry
                </label>
                <input
                  id="timeOfEntry"
                  placeholder="Enter time of entry"
                  type="text"
                  value={values.timeOfEntry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.timeOfEntry && touched.timeOfEntry
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.timeOfEntry && touched.timeOfEntry && (
                  <div className="input-feedback">{errors.timeOfEntry}</div>
                )}
              </div>

              <div className="form-item">
                <label htmlFor="timeOfExit" style={{ display: 'block' }}>
                  Time Of Exit
                </label>
                <input
                  id="timeOfExit"
                  placeholder="Enter time of exit"
                  type="text"
                  value={values.timeOfExit}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.timeOfExit && touched.timeOfExit
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.timeOfExit && touched.timeOfExit && (
                  <div className="input-feedback">{errors.timeOfExit}</div>
                )}
              </div>

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  submitVisitorForm: payload => dispatch(submitForm(payload)),
});

export default connect(
  null,
  mapDispatchToProps,
)(HomePage);
