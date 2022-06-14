import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions'
import { withRouter } from 'react-router';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ label, name }) => {
        return (
            <div key={name}>
                <label>{ label }</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    })
    return(
        <div>
            <h4>Please confirm your entries</h4>
            { reviewFields }
            <button className="yellow darken-3 btn-flat white-text" onClick={ onCancel}>
                Back
            </button>
            <button 
                onClick={() => submitSurvey(formValues, history)}
                className="green btn-flat right white-text"
            >
                send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));