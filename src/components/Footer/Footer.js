import React from 'react';

import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      <div className={classes.copyright}>
        Copyright &#169; 2020 - Indra Rahmanto
      </div>
      <div className={classes.colorLine}>
      </div>
    </div>
  );
}

export default Footer;