import React from 'react';

import classes from './Alert.module.css';

const alert = (props) => {

  return (
    <div className={classes.Alert}>
      <div className={classes.logo}>
        <i className={'fa fa-check'} />
      </div>
      <div className={classes.text}>
        {props.children}
      </div>
      <div className={classes.close}
        onClick={props.closeButtonClicked}>
        <i className={'fa fa-close'} />
      </div>
    </div>
  )
};

export default alert;