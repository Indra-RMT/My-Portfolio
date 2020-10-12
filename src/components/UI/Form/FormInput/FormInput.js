import React from 'react';

import classes from './FormInput.module.css';

const FormInput = (props) => {
  
  let classNameColor = '';
  if (props.color === 'white'){
    classNameColor = classes.white;
  }

  let classError = classes.error;
  let label = (
      <label className={classes.labelError}>
        <i className={['fa fa-exclamation-circle', classes.fontAwesome].join(' ')}></i>
        &nbsp;
        {props.state.invalidMessage}
      </label>
    )
  if (props.state.valid) {
    label = '';
    classError = '';
  }

  return (
    <div className={[classes.FormInput, classNameColor, classError].join(' ')}>
      <div className={classes.label}>{props.label}</div>
      <input type="text" onChange={props.changed} />
      {label}
    </div>
  )
};

export default FormInput;