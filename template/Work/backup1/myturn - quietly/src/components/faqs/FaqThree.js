import React from 'react';

const FaqThree = () => {
  if(localStorage.language === undefined) {
    return (
      <>
        <section className='faq-section ptb-120'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='50'
                >
                  <span className='faq-icon me-3'>
                    <i className='fa-solid fa-chart-network text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>
                    INTERFACE WEB
                    </h5>
                    <p className='mb-0'>
                    Não é necessário instalar, suporte multi-utilizador, acessivel de qualquer lado bastando usar um browser.	
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <span className='faq-icon me-3'>
                    <i className='fa-solid fa-money-check-dollar text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>REDUÇÃO DE CUSTOS</h5>
                    <p className='mb-0'>
                    Substitua várias ferramentas com apenas uma, com gestão integrada de várias soluções e acessivel aos serviços cloud de qualquer parte.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='150'
                >
                  <span className='faq-icon me-3'>
                    <i className='fa-solid fa-list-check text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>OPERAÇÕES EFICIENTES E OPTIMIZADAS</h5>
                    <p className='mb-0'>
                    Ferramentas de gestão e controlo que permitem uma visão global, em tempo real, por qualquer device em qualquer ponto.	
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <span className='faq-icon me-3'>
                    <i className='fa-solid fa-network-wired text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>INTEGRAÇÃO COM OUTRAS PLATAFORMAS</h5>
                    <p className='mb-0'>
                    Pode ser integrada com qualquer plataforma existente.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='250'
                >
                  <span className='faq-icon me-3'>
                    <i className='fa-solid fa-bell text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>NOTIFICAÇÕES AUTOMÁTICAS</h5>
                    <p className='mb-0'>
                    Pode receber notificações por proximidade de vez do atendimento, ou atrasos nas marcações, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <span className='faq-icon me-3'>
                  <i className='fa-solid fa-table-columns text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>Pode receber notificações por proximidade de vez do atendimento, ou atrasos nas marcações, etc.</h5>
                    <p className='mb-0'>
                    Visão global das suas lojas, locais e serviços num unico ecrã. Informação detalhada sobre cada local está disponivel, através de graficos intuitivos bem como racios de performace , através de simples clicks.	
                    </p>
                  </div>
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
        <section className='faq-section ptb-120'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='50'
                >
                  <span className='faq-icon me-3'>
                    <i className='fa-solid fa-chart-network text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>
                    Web Interface
                    </h5>
                    <p className='mb-0'>
                    No installation, multi-user support, accessible from anywhere using just a web browser.	
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <span className='faq-icon me-3'>
                    <i className='fa-solid fa-money-check-dollar text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>Reduced Costs</h5>
                    <p className='mb-0'>
                    Replace multiple tools with just one, with integrated management of heterogeneous solutions, with accessibility to cloud services from anywhere.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='150'
                >
                  <span className='faq-icon me-3'>
                    <i className='fa-solid fa-list-check text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>Optimised and Efficient Operation</h5>
                    <p className='mb-0'>
                    Management and control tools that give a global view, in real-time, by any device of whole network.	
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <span className='faq-icon me-3'>
                    <i className='fa-solid fa-network-wired text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>Integrates with other platforms</h5>
                    <p className='mb-0'>
                    Integrates with other Platforms
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='250'
                >
                  <span className='faq-icon me-3'>
                    <i className='fa-solid fa-bell text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>Automatic Notifications</h5>
                    <p className='mb-0'>
                    You may receive notifications due to proximity to the service, or in delays in the appointments, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-10'>
                <div
                  className='faq-content-wrap d-flex mb-5'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <span className='faq-icon me-3'>
                  <i className='fa-solid fa-table-columns text-primary'></i>
                  </span>
                  <div className='faq-info'>
                    <h5>Complete Dashboard, Real-Time Information and Reporting</h5>
                    <p className='mb-0'>
                    Have a global vision of your branches and services in a single screen. Detailed information about each one is also available, through intuitive graphics, performance ratios, all accessible with just a click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default FaqThree;
