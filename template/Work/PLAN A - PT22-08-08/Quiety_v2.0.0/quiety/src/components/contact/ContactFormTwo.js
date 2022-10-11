import React from 'react';

const ContactFormTwo = () => {
  if(localStorage.language === undefined) {
    return (
      <>
        <section
          className='contact-us-form pt-60 pb-120'
          style={{
            background:
              "url('assets/img/shape/contact-us-bg.svg')no-repeat center bottom",
          }}
        >
          <div className='container'>
            <div className='row justify-content-lg-between align-items-center'>
              <div className='col-lg-6 col-md-8'>
                <div className='section-heading'>
                  <h2>Contato-Nos</h2>
                </div>
                <form action='#' className='register-form'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <label htmlFor='name' className='mb-1'>
                        Nome <span className='text-danger'>*</span>
                      </label>
                      <div className='input-group mb-3'>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          required
                          placeholder='Nome'
                          aria-label='Name'
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <label htmlFor='email' className='mb-1'>
                        E-mail<span className='text-danger'>*</span>
                      </label>
                      <div className='input-group mb-3'>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          required
                          placeholder='E-mail'
                          aria-label='Email'
                        />
                      </div>
                    </div>
                    <div className='col-12'>
                      <label htmlFor='yourSubject' className='mb-1'>
                        Assunto <span className='text-danger'>*</span>
                      </label>
                      <div className='input-group mb-3'>
                        <input
                          className='form-control'
                          id='yourSubject'
                          required
                          placeholder='Assunto'
                        ></input>
                      </div>
                    </div>
                    <div className='col-12'>
                      <label htmlFor='yourMessage' className='mb-1'>
                      Mensagem <span className='text-danger'>*</span>
                      </label>
                      <div className='input-group mb-3'>
                        <textarea
                          className='form-control'
                          id='yourMessage'
                          required
                          placeholder='Mensagem'
                          style={{ height: '120px' }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type='submit' className='btn btn-primary mt-4'>
                  Entrar em contato
                  </button>
                </form>
              </div>
              <div className='col-lg-5 col-md-10'>
                <div className='contact-us-img'>
                  <img
                    src='assets/img/contact-us-img-2.svg'
                    alt='contact us'
                    className='img-fluid'
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
        <section
          className='contact-us-form pt-60 pb-120'
          style={{
            background:
              "url('assets/img/shape/contact-us-bg.svg')no-repeat center bottom",
          }}
        >
          <div className='container'>
            <div className='row justify-content-lg-between align-items-center'>
              <div className='col-lg-6 col-md-8'>
                <div className='section-heading'>
                  <h2>Contact Us</h2>
                </div>
                <form action='#' className='register-form'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <label htmlFor='name' className='mb-1'>
                        Name <span className='text-danger'>*</span>
                      </label>
                      <div className='input-group mb-3'>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          required
                          placeholder='Name'
                          aria-label='Name'
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <label htmlFor='email' className='mb-1'>
                        Email<span className='text-danger'>*</span>
                      </label>
                      <div className='input-group mb-3'>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          required
                          placeholder='Email'
                          aria-label='Email'
                        />
                      </div>
                    </div>
                    <div className='col-12'>
                      <label htmlFor='yourSubject' className='mb-1'>
                        Subject <span className='text-danger'>*</span>
                      </label>
                      <div className='input-group mb-3'>
                        <input
                          className='form-control'
                          id='yourSubject'
                          required
                          placeholder='Subject'
                        ></input>
                      </div>
                    </div>
                    <div className='col-12'>
                      <label htmlFor='yourMessage' className='mb-1'>
                        Message <span className='text-danger'>*</span>
                      </label>
                      <div className='input-group mb-3'>
                        <textarea
                          className='form-control'
                          id='yourMessage'
                          required
                          placeholder='How can we help you?'
                          style={{ height: '120px' }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type='submit' className='btn btn-primary mt-4'>
                    Get in Touch
                  </button>
                </form>
              </div>
              <div className='col-lg-5 col-md-10'>
                <div className='contact-us-img'>
                  <img
                    src='assets/img/contact-us-img-2.svg'
                    alt='contact us'
                    className='img-fluid'
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

export default ContactFormTwo;
