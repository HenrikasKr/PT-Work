import React from 'react';
import HeroTitle from '../../components/common/HeroTitle';

const HeroFour = () => {
  if(localStorage.language === undefined) {
    return (
      <>
        <section
          className='hero-section ptb-120 text-white bg-dark'
          style={{
            background: "url('assets/img/hero-dot-bg.png')no-repeat center right",
          }}
        >
          <div className='container my-5'>
            <div className='row justify-content-center text-center text-lg-start align-items-center my-5'>
              <div className='col-lg-6 col-md-10 mb-5'>
                <div className='hero-content-wrap mt-5 mt-lg-0 mt-xl-0 mb-5'>
                  <HeroTitle
                    title='Sectores'
                  />
                </div>
              </div>
              <div className='col-lg-6 col-md-8 mt-5'>
                <div
                  className='hero-img-wrap position-relative app-screen-bg mt-5'
                  style={{
                    backgroundImage: 'url(assets/img/shape/shape-bg-3.svg)',
                  }}
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <ul className='position-absolute animate-element parallax-element shape-service'>
                    <li className='layer' data-depth='0.03'>
                      <img
                        src='assets/img/color-shape/image-4.svg'
                        alt='shape'
                        className='img-fluid position-absolute color-shape-1'
                      />
                    </li>
                    <li className='layer' data-depth='0.02'>
                      <img
                        src='assets/img/color-shape/feature-2.svg'
                        alt='shape'
                        className='img-fluid position-absolute color-shape-2 z-5'
                      />
                    </li>
                    <li className='layer' data-depth='0.03'>
                      <img
                        src='assets/img/color-shape/feature-3.svg'
                        alt='shape'
                        className='img-fluid position-absolute color-shape-3'
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section
          className='hero-section ptb-120 text-white bg-dark'
          style={{
            background: "url('assets/img/hero-dot-bg.png')no-repeat center right",
          }}
        >
          <div className='container my-5'>
            <div className='row justify-content-center text-center text-lg-start align-items-center my-5'>
              <div className='col-lg-6 col-md-10 mb-5'>
                <div className='hero-content-wrap mt-5 mt-lg-0 mt-xl-0 mb-5'>
                  <HeroTitle
                    title='Sectors'
                  />
                </div>
              </div>
              <div className='col-lg-6 col-md-8 mt-5'>
                <div
                  className='hero-img-wrap position-relative app-screen-bg mt-5'
                  style={{
                    backgroundImage: 'url(assets/img/shape/shape-bg-3.svg)',
                  }}
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <ul className='position-absolute animate-element parallax-element shape-service'>
                    <li className='layer' data-depth='0.03'>
                      <img
                        src='assets/img/color-shape/image-4.svg'
                        alt='shape'
                        className='img-fluid position-absolute color-shape-1'
                      />
                    </li>
                    <li className='layer' data-depth='0.02'>
                      <img
                        src='assets/img/color-shape/feature-2.svg'
                        alt='shape'
                        className='img-fluid position-absolute color-shape-2 z-5'
                      />
                    </li>
                    <li className='layer' data-depth='0.03'>
                      <img
                        src='assets/img/color-shape/feature-3.svg'
                        alt='shape'
                        className='img-fluid position-absolute color-shape-3'
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default HeroFour;
