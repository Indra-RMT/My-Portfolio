import React from 'react';

import classes from './FormInput.module.css';

const FormInput = (props) => {
  
  let classNameColor = '';
  if(props.color === 'white'){
    classNameColor = classes.white;
  }

  return (
    <div className={[classes.FormInput, classNameColor].join(' ')}>
      <div className={classes.label}>{props.label}</div>
      <input type="text" onChange={props.changed} />
    </div>
  )
};

export default FormInput;