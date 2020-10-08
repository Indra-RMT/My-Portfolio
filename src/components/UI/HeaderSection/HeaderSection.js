import React, { Component } from 'react';

import classes from './HeaderSection.module.css';

class HeaderSection extends Component {
  render(){
    let classNameColor = '';
    if(this.props.color === 'white'){
      classNameColor = classes.white;
    }
    return (
      <div className={[classes.HeaderSection, classNameColor].join(' ')}>
        {this.props.children}
        <div className={classes.dashStriped}></div>
      </div>
    );
  }
}

export default HeaderSection;