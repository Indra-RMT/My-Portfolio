import React from 'react';

import classes from './HeaderSingglePage.module.css';

const HeaderSingglePage = (props) => (
  <div className={classes.HeaderSingglePage}>
      <div className={classes.wrapper}>
        {props.children}
      </div>
  </div>
);

export default HeaderSingglePage;