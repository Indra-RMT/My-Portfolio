import React, { Component } from 'react';

import classes from './NavigationBar.module.css';

import { Link as ScrollLink } from "react-scroll";
import { withRouter } from 'react-router-dom';
import PageContainer from '../UI/PageContainer/PageContainer';

class NavigationBar extends Component {
  state = {
    logo: 'webDev',
    isTop: true
  }
  
  render(){
    const backToHomeSelectedHandler = () => {
      const { history } = this.props;
      history.push('/');
    }

    const pathName = this.props.history.location.pathname;

    let navigationMenu = 
      <ul>
        <li>
          <ScrollLink 
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
            to="workPortfolio"
            href="#work-portfolio">My Created
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
            to="contactMe"
            href="#contact-me">Contact Me
          </ScrollLink>
        </li>
      </ul>;
    if(pathName === '/all-work'){
      navigationMenu = 
      <ul>
        <li>
          <button
             onClick={() => backToHomeSelectedHandler()}>Back To Home
          </button>
        </li>
      </ul>; 
    }

    this.setState.isTop = this.props.isTop;

    let topNav = classes.isTop;
    if (this.props.isTop) {
      topNav = '';
    }

    return (
      <div className={[classes.NavigationBar, topNav].join(' ')}>
        <nav>
          <PageContainer>
            <input type="checkbox" id="check" className={classes.check} />
            <label htmlFor="check" className={classes.checkBtn}>
              <i className="fa fa-bars" />
            </label>
              <label className={classes.logo}>{this.state.logo}</label>
              {navigationMenu}    
          </PageContainer>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavigationBar);