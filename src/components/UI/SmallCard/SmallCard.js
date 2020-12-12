/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import classes from './SmallCard.module.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class SmallCard extends Component {
 
  render () {
    return (
      <div className={classes.SmallCard} onClick={this.props.buttonClickHandler}>
        <div className={classes.cardImage}>
          <LazyLoadImage
            alt={this.props.title}
            src={this.props.thumbnail}
            effect="blur"/>
        </div>
        <div className={classes.cardContent}>
          <div className={classes.cardTitle}>{this.props.title}</div>
        </div>
      </div>
    )
  }
};

export default SmallCard;