/* eslint-disable array-callback-return */

import React, { Component } from 'react';

import classes from './ShowImages.module.css';
import Aux from '../../../hoc/Aux/Aux';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class ShowImages extends Component {
  state = {
    allImage: null,
    srcTopImage: require(
      '../../../assets/images/thumbnail-images/' 
      + this.props.allImage[0]
      ),
    activeImage: null
  }

  importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { 
      images[item.replace('./', '')] = r(item); 
    });

    return images;
  }

  componentDidMount(){  
    const images = this.importAll(
      require.context(
        '../../../assets/images/thumbnail-images',
        false,
        /\.(png|jpe?g|svg)$/
        )
      );

    this.setState({allImage: images});
  }
  

  render () {
    const allImage = this.props.allImage;
    let listImage = [];

    allImage.forEach((image, i) => {
      let sourceImage = '';
      if(image !== null){
        sourceImage = require(
          '../../../assets/images/thumbnail-images/' 
          + image
          )
      }

      let classListImage = classes.image;
      if(this.state.activeImage === null && i === 0){
        classListImage = [classes.image, classes.active].join(' ');
      }
      if(this.state.activeImage !== null && i === this.state.activeImage){
        classListImage = [classes.image, classes.active].join(' ');
      }
      
      if(image !== null ){
        listImage.push(
          <div
            className={classListImage}
            key={i}
            onClick={()=>{listImageClicked(image, i)}}>
            <LazyLoadImage 
              src={sourceImage} 
              alt={image}
              effect="blur"/>
          </div>
        );
      } else {
        listImage.push(
          <div 
            className={classes.nullImage}
            key={i}>
          </div>
        )
      }
    });

    const listImageClicked = (image, index) => {
      setTopImage(image);
      setActiveImageClass(index);
    }

    const setTopImage = (image) => {
      const allImage = this.state.allImage;
      this.setState({srcTopImage: allImage[image]});
    }

    const setActiveImageClass = (index) => {
      this.setState({activeImage: index});
    }

    return (
      <Aux>
        <div className={classes.ShowImages}>
          <div className={classes.topImage}>
            <LazyLoadImage 
              src={this.state.srcTopImage}
              alt="mainImage"
              effect="blur"/>
          </div>
          
          <div className={classes.listImages}>
            {listImage}
          </div>
        </div>
      </Aux>
    )
  }
}

export default ShowImages;