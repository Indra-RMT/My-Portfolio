import React, { Component } from 'react';

import classes from './HeroSection.module.css';
import Button from '../../components/UI/Button/Button';

import { Link as ScrollLink } from "react-scroll";

class HeroSection extends Component {
  render(){
    return (
      <div className={classes.HeroSection}>
        <div className={classes.heroText}>
          <div>Problem Solver With Coding</div>
          <div>Indra Rahmanto [Web Developer]</div>
          <div>Build Web App for You and Simplify Users Life</div>
          <div>
            <ScrollLink 
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}
              to="workPortfolio">
              <Button btnType="Success">
                My Work
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;