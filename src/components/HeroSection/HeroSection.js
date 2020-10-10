import React, { Component } from 'react';

import classes from './HeroSection.module.css';
import Button from '../../components/UI/Button/Button';
import PageContainer from '../UI/PageContainer/PageContainer';

import { Link as ScrollLink } from "react-scroll";

class HeroSection extends Component {
  render(){
    return (
      <div className={classes.HeroSection}>
        
          <div className={classes.heroText}>
          <PageContainer>
            <div>Front-End Web Developer </div>
            <div>Hello, I am indra Rahmanto. I create fully responsive and functional user interface for you</div>
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
        </PageContainer>
          </div>  
      </div>
    );
  }
}

export default HeroSection;