import React, { Component } from 'react';
import classes from './SelectCategory.module.css';

class SelectCategory extends Component {
  render(){

    let classSelected = '';
    if (this.props.selected) {
      classSelected = classes.active;
    }

    return (
        <div key={this.props.SelectCategory} 
          onClick={this.props.clicked}
          className={[classes.SelectCategory, classSelected].join(' ')}>{this.props.item}
        </div>
    )
  }
}

export default SelectCategory;