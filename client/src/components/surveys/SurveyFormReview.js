import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions'
import { withRouter } from 'react-router';

// this.props.onCancel , this.props.formValues
// formValues are the user inputted info from SurveyNew
// history comes from withRouter
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  // this.field.name, this.field.label
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  })

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        {reviewFields}
      </div>
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
        Back
      </button>
      <button onClick={() => submitSurvey(formValues, history)} className="green btn-flat white-text right">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
