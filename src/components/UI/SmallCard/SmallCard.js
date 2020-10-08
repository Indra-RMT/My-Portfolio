/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import classes from './SmallCard.module.css';

class SmallCard extends Component {
  importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  images = this.importAll(require.context('../../../assets/images/thumbnail-images', false, /\.(png|jpe?g|svg)$/));

  render () {
    
    return (
      <div className={classes.SmallCard} onClick={this.props.buttonClickHandler}>
        <div className={classes.cardImage}>
          <img src={this.images[this.props.thumbnail]} alt={this.props.title} />
        </div>
        <div className={classes.cardContent}>
          <div className={classes.cardTitle}>{this.props.title}</div>
        </div>
      </div>
    )
  }
};

export default SmallCard;