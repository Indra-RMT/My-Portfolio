import React, { Component } from 'react';

// import Aux from '../../../hoc/Aux/Aux';
import HeaderSection from '../../../components/UI/HeaderSection/HeaderSection';
import ThumbnailWorks from '../ThumbnailWorks/ThumbnailWorks';
import classes from './WorkPortfolio.module.css';

class WorkPortfolio extends Component {
  render(){
    return ( 
      <div className={classes.WorkPortfolio}
        id="workPortfolio">
        <HeaderSection>
          Work Portfolio
        </HeaderSection>
        <ThumbnailWorks />
      </div>
    );
  }
}

export default WorkPortfolio;