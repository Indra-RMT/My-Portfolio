import React from 'react';
import { FaReact } from 'react-icons/fa';

import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      <div className={classes.copyright}>
        &#169; 2020 - Indra Rahmanto - Build with <span className={classes.reactIcon}><FaReact /></span>
      </div>
      <div className={classes.colorLine}>
      </div>
    </div>
  );
}

export default Footer;