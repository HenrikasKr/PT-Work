import React from 'react';

const ContactBox = () => {
  if(localStorage.language === undefined) {
    return (
      <>
        <section className='contact-promo ptb-120'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8 col-md-6 mt-4 mt-lg-0'>
                <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                  <span className='fad fa-comment-alt-lines fa-3x text-primary'></span>
                  <div className='contact-promo-info mb-4'>
                    <h5>Contato</h5>
                    <p>
                      <strong>Sede: </strong>Av. Republica nº.60, 1ºDto 1050-197 Lisboa Portugal <br />
                      <strong>E-mail: </strong>info@myturn.cloud <br />
                      <strong>Horário: </strong>09:00 - 18:00 <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
                <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                  <span className='fad fa-envelope fa-3x text-primary'></span>
                  <div className='contact-promo-info mb-4'>
                    <h5>Envie-nos um e-mail</h5>
                    <p>
                      Envie-nos um e-mail para<br/>
                      <strong>info@myturn.cloud </strong>
                      
                    </p>
                  </div>
                  <a
                    href='mailto:info@myturn.cloud'
                    className='btn btn-primary mt-auto'
                  >
                    Email-nos
                  </a>
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
        <section className='contact-promo ptb-120'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8 col-md-6 mt-4 mt-lg-0'>
                <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                  <span className='fad fa-comment-alt-lines fa-3x text-primary'></span>
                  <div className='contact-promo-info mb-4'>
                    <h5>Contacts</h5>
                    <p>
                      <strong>Address: </strong>Av. Republica nº.60, 1ºDto 1050-197 Lisboa Portugal <br />
                      <strong>E-mail: </strong>info@myturn.cloud <br />
                      <strong>Opening hours: </strong>09:00 - 18:00 <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
                <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                  <span className='fad fa-envelope fa-3x text-primary'></span>
                  <div className='contact-promo-info mb-4'>
                    <h5>Email Us</h5>
                    <p>
                      Send us an email at <br/>
                      <strong>info@myturn.cloud </strong>
                    </p>
                  </div>
                  <a
                    href='mailto:info@myturn.cloud'
                    className='btn btn-primary mt-auto'
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default ContactBox;
