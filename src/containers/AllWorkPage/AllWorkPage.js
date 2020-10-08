import React, { Component } from 'react';

import PageContainer from '../../components/UI/PageContainer/PageContainer';
import HeaderSingglePage from '../../components/UI/HeaderSingglePage/HeaderSingglePage';
import AllWork from '../../components/AllWork/AllWork';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Footer from '../../components/Footer/Footer';

class AllWorkPage extends Component {
  render(){
    return (
      <div>
        <HeaderSingglePage>
          All Work
        </HeaderSingglePage>
        <PageContainer>
          <AllWork/>
        </PageContainer>
        <SocialMedia/>
        <Footer/>
      </div>
    );
  }
}

export default AllWorkPage;