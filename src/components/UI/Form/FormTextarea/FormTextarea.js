import React from 'react';

import classes from './FormTextarea.module.css';

const FormTextarea = (props) => {

  let classNameColor = '';
  if(props.color === 'white'){
    classNameColor = classes.white;
  }

  return (
  <div className={[classes.FormTextarea, classNameColor].join(' ')}>
    <div 
      className={classes.label}>
      {props.label}
    </div>
    <textarea 
      rows="4"
      type="text"
      onChange={props.changed} />
  </div>
  )
};

export default FormTextarea;