/* eslint-disable no-useless-concat */
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import ScrollToTop from './components/UI/ScrollToTop/ScrollToTop';
import NavigationBar from './components/NavigationBar/NavigationBar';
import MainPage from './containers/MainPage/MainPage';
import AllWorkPage from './containers/AllWorkPage/AllWorkPage';

class App extends Component {
  state = {
    isTop: true
  }

  render() {

    const scrollFunction = () => {
      const docElement = document.documentElement;
      const isTop = docElement.scrollTop < 3;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    }

    window.onscroll = () => scrollFunction();

    var maxWidth = document.documentElement.offsetWidth;
    [].forEach.call(
      document.querySelectorAll('*'),
      function(el) {
        if (el.offsetWidth > maxWidth) {
          console.log(el);
        }
      }
    );

    return (
      <ScrollToTop>
        <NavigationBar 
          isTop={this.state.isTop}/>
        <Switch>
          <Route path="/all-work" component={AllWorkPage} />
          <Route path="/" exact component={MainPage} />
        </Switch>
      </ScrollToTop>
    )
  }
}

export default withRouter(App);
