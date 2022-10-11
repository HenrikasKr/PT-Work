import React, { Component } from 'react';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import HeroOne from './HeroOne';
import FeatureImgContentFour from '../../components/feature-img-content/FeatureImgContentFour';
import PageMeta from '../../components/common/PageMeta';
import WorkProcess from '../../components/work-process/WorkProcess';
import FooterOne from '../../layout/Footer/FooterOne';
import FeatureOne from '../../components/features/FeatureOne';

class HomeSassOne extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title='myturn' />
        <Navbar navDark />
        <HeroOne />
        <FeatureOne />
        <FeatureImgContentFour />
        <WorkProcess />
        <FooterOne footerGradient />
      </Layout>
    );
  }
}

export default HomeSassOne;
