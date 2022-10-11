import React from "react";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import PageMeta from "../../components/common/PageMeta";
import FooterOne from "../../layout/Footer/FooterOne";
import FeatureTwo from "../../components/features/FeatureTwo";

const HomeSassTwo = () => {
  return (
    <Layout>
      <PageMeta title="myturn - Solutions" />
      <Navbar />
      <FeatureTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeSassTwo;
