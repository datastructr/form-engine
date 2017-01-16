import React, { Component, PropTypes } from 'react';
import Immutable, { Map, List, fromJS } from 'immutable';
import { reduxForm } from 'redux-form';


import Form from './components/Form';

const BASE_STYLES = {
  formClassName: 'formengine-form'
};


class FormEngine extends Component {
  constructor(props) {
    super(props);
    if(!props.template) {
      throw new Error(`Form-Engine requires a form template prop in order to work!`)
    }
    this.state = {
      template: fromJS(props.template),
      title: props.template.title
    }
  }

  _generateFormFromTemplate(template, styles = BASE_STYLES) {
    if(!template.get('form-body')) {
      throw new Error(`'form-body' must be part of the form template!`)
    }
    return (<Form template={template} styles={styles} />)
  }

  render() {
    return this._generateFormFromTemplate(this.state.template, this.props.styles);
  }
}

FormEngine.propTypes = {
  template: PropTypes.object.isRequired,
  styles: PropTypes.object
}


export default function FromEngine(name) {
  FormEngine = reduxForm({
    form: name
  })(FormEngine);

  return FormEngine;
}