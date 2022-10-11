import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import FaqThree from '../../components/faqs/FaqThree';
import FeatureFour from '../../components/features/FeatureFour';
import HeroFour from './HeroFour';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';

const HomeAppLanding = () => {
  return (
    <Layout>
      <PageMeta title='myturn - Sectors' />
      <Navbar navDark />
      <HeroFour />
      <FeatureFour />
      <FaqThree />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeAppLanding;
