import React from 'react';
const FeatureImgContentFour = () => {
  
if(localStorage.language === undefined) {
  return (
    <>
      <section className='why-choose-us ptb-120'>
        <div className='container'>
          <div className='row justify-content-lg-between align-items-center'>
            <div className='col-lg-12 col-12'>
              <div className='feature-img-holder mt-4 mt-lg-0 mt-xl-0'>
                <img
                  src='assets/img/infographic-myturn-pt.png'
                  className='img-fluid'
                  alt='feature-img'
                />
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
      <section className='why-choose-us ptb-120'>
        <div className='container'>
          <div className='row justify-content-lg-between align-items-center'>
            <div className='col-lg-12 col-12'>
              <div className='feature-img-holder mt-4 mt-lg-0 mt-xl-0'>
                <img
                  src='assets/img/infographic-myturn-en.png'
                  className='img-fluid'
                  alt='feature-img'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

};

export default FeatureImgContentFour;
