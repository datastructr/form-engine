import React, { Component, PropTypes } from 'react';

import FormBody from './FormBody';

export default class Form extends Component {

  render() {
    let {
      template,
      styles
    } = this.props;

    return (
      <form className={styles.formClassName}>
        <FormBody template={template.get('form-body')} styles={styles} />
      </form>
    )
  }
}

Form.propTypes = {
  template: PropTypes.object.isRequired,
  styles: PropTypes.object
}
