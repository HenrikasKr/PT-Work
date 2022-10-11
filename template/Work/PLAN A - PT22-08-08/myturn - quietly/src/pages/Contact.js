import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';
import ContactBox from '../components/contact/ContactBox';
import ContactFormTwo from '../components/contact/ContactFormTwo';
import FooterOne from '../layout/Footer/FooterOne';
import Navbar from '../layout/Header/Navbar';
import Layout from '../layout/Layout';

const Contact = () => {
  if(localStorage.language === undefined) {
    return (
      <Layout>
        <PageMeta title='myturn - Contato' />
        <Navbar />
        <PageHeader
          title='Contato-Nos'
        />
        <ContactBox />
        <ContactFormTwo />
        <FooterOne
          style={{
            background:
              "url('assets/img/page-header-bg.svg')no-repeat bottom right",
          }}
        />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <PageMeta title='myturn - Contact' />
        <Navbar />
        <PageHeader
          title='Contact Us'
        />
        <ContactBox />
        <ContactFormTwo />
        <FooterOne
          style={{
            background:
              "url('assets/img/page-header-bg.svg')no-repeat bottom right",
          }}
        />
      </Layout>
    );
  }
};

export default Contact;
