import React from 'react';
import { Link } from 'react-router-dom';

const FooterOne = ({ footerLight, style, footerGradient }) => {
  if(localStorage.language === undefined) {
    return (
      <>
        <footer className='footer-section'>
          <div
            className={`footer-top ${footerLight ? 'footer-light' : 'bg-dark'} ${
              footerGradient ? 'bg-gradient' : 'bg-primary'
            }  text-white ptb-120`}
            style={style}
          >
            <div className='container'>
              <div className='row justify-content-between'>
                <div className='col-md-8 col-lg-4 mb-md-4 mb-lg-0'>
                  <div className='footer-single-col'>
                    <div className='footer-single-col mb-4'>
                      <img
                        src='assets/img/logo.png'
                        alt='logo'
                        className='img-fluid logo-white'
                      />
                      <img
                        src='assets/img/logo.png'
                        alt='logo'
                        className='img-fluid logo-color'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6 mt-6 mt-md-0 mt-lg-0'>
                  <div className='row'>
                    <div className='col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0'>
                      <div className='footer-single-col'>
                        <h3>Páginas</h3>
                        <ul className='list-unstyled footer-nav-list mb-lg-0'>
                          <li>
                            <Link to='/' className='text-decoration-none text-white'>
                              Sobre
                            </Link>
                          </li>
                          <li>
                            <Link to='/solutions' className='text-decoration-none text-white'>
                            Soluções
                            </Link>
                          </li>
                          <li>
                            <Link to='/sectors' className='text-decoration-none text-white'>
                              Sectores
                            </Link>
                          </li>
                          <li>
                            <Link to='/contact' className='text-decoration-none text-white'>
                              Contato
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-6 col-lg-6 mt-6 mt-md-0 mt-lg-0'>
                      <div className='footer-single-col'>
                        <h3>Contato</h3>
                        <ul className='list-unstyled footer-nav-list mb-lg-0'>
                          <li>
                              <b>Sede:</b> Av. Republica nº.60, 1ºDto 1050-197 Lisboa Portugal
                          </li>
                          <li>
                              <b>E-mail:</b> info@myturn.cloud 
                          </li>
                          <li>
                              <b>Horário:</b> 09:00 - 18:00
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div
            className={`footer-bottom ${
              footerLight ? 'footer-light' : 'bg-dark'
            } ${footerGradient ? 'bg-gradient' : ''} text-white py-4`}
          >
            <div className='container text-center'>
              <div className='row'>
                <div className='col-12'>
                  <div className='copyright-text'>
                    <p className='mb-lg-0 mb-md-0'>
                      &copy; myturn, 2017
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  } else {
    return (
      <>
        <footer className='footer-section'>
          <div
            className={`footer-top ${footerLight ? 'footer-light' : 'bg-dark'} ${
              footerGradient ? 'bg-gradient' : 'bg-primary'
            }  text-white ptb-120`}
            style={style}
          >
            <div className='container'>
              <div className='row justify-content-between'>
                <div className='col-md-8 col-lg-4 mb-md-4 mb-lg-0'>
                  <div className='footer-single-col'>
                    <div className='footer-single-col mb-4'>
                      <img
                        src='assets/img/logo.png'
                        alt='logo'
                        className='img-fluid logo-white'
                      />
                      <img
                        src='assets/img/logo.png'
                        alt='logo'
                        className='img-fluid logo-color'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6 mt-6 mt-md-0 mt-lg-0'>
                  <div className='row'>
                    <div className='col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0'>
                      <div className='footer-single-col'>
                        <h3>Pages</h3>
                        <ul className='list-unstyled footer-nav-list mb-lg-0'>
                          <li>
                            <Link to='/' className='text-decoration-none text-white'>
                              About
                            </Link>
                          </li>
                          <li>
                            <Link to='/solutions' className='text-decoration-none text-white'>
                              Solutions
                            </Link>
                          </li>
                          <li>
                            <Link to='/sectors' className='text-decoration-none text-white'>
                              Sectors
                            </Link>
                          </li>
                          <li>
                            <Link to='/contact' className='text-decoration-none text-white'>
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-6 col-lg-6 mt-6 mt-md-0 mt-lg-0'>
                      <div className='footer-single-col'>
                        <h3>Contact</h3>
                        <ul className='list-unstyled footer-nav-list mb-lg-0'>
                          <li>
                              <b>Address:</b> Av. Republica nº.60, 1ºDto 1050-197 Lisboa Portugal
                          </li>
                          <li>
                              <b>E-mail:</b> info@myturn.cloud 
                          </li>
                          <li>
                              <b>Opening hours:</b> 09:00 - 18:00
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div
            className={`footer-bottom ${
              footerLight ? 'footer-light' : 'bg-dark'
            } ${footerGradient ? 'bg-gradient' : ''} text-white py-4`}
          >
            <div className='container text-center'>
              <div className='row'>
                <div className='col-12'>
                  <div className='copyright-text'>
                    <p className='mb-lg-0 mb-md-0'>
                      &copy; myturn, 2017
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
};

export default FooterOne;
