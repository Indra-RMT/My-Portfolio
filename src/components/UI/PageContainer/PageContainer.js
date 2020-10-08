import React from 'react';

import classes from './PageContainer.module.css';

const PageContainer = (props) => (
  <div className={classes.PageContainer}>
    {props.children}
  </div>
)

export default PageContainer;