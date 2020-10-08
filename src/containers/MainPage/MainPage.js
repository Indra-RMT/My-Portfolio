import React, { Component } from 'react';

import HeroSection from '../../components/HeroSection/HeroSection';
import PageContainer from '../../components/UI/PageContainer/PageContainer';
import WorkPortfolio from '../../components/Portfolio/WorkPortfolio/WorkPortfolio';
import ContactMe from '../../components/ContactMe/ContactMe';
import Footer from '../../components/Footer/Footer';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Hoc from '../../hoc/Aux/Aux';

class MainPage extends Component {
  render(){
    return (
      <Hoc>
        <HeroSection/>
        <PageContainer>
          <WorkPortfolio/>
        </PageContainer>
        <ContactMe/>
        <SocialMedia/>
        <Footer/>
      </Hoc>
    );
  }
}

export default MainPage;