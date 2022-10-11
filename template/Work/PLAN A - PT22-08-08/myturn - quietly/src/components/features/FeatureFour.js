import React from 'react';

const FeatureFour = () => {
  if(localStorage.language === undefined) {
    return (
      <>
        <section className='feature-section ptb-120'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='50'
                >
                  <div className='mb-3 cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0 z-2'>
                    <div className='feature-icon d-inline-block bg-primary-soft rounded-circle mb-32'>
                      <i className='fa-solid fa-piggy-bank text-primary fa-2x'></i>
                    </div>
                    <h3 className='h5'>Banca</h3>
                    <p className='mb-4'>
                    A inovação tecnológica do myturn ajuda os bancos a transformarem o atendimento da rede de agências, aumentando os níveis de serviço, e potenciando as vendas.Ofereça aos clientes uma experiência onmi-channel.
                    </p>
                  </div>
  
                  <div className='dot-shape-bg position-absolute z--1 left--40 top--40'>
                    <img src='assets/img/shape/dot-big-square.svg' alt='shape' />
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <div className='mb-3 cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0'>
                    <div className='feature-icon d-inline-block bg-danger-soft rounded-circle mb-32'>
                      <i className='fa-solid fa-heart-pulse text-danger fa-2x'></i>
                    </div>
                    <h3 className='h5'>Saúde</h3>
                    <p className='mb-0'>
                    myturn oferece aos hospitais, clinicas, laboratórios e farmácias, soluções de atendimento ágeis, que permitem a gestão dos processos de trabalho de acordo com ao fluxo de clientes, aumentando a eficiência operacional e a qualidade do serviço.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <div className='mb-3 cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0'>
                    <div className='feature-icon d-inline-block bg-success-soft rounded-circle mb-32'>
                      <i className='fa-solid fa-chair-office text-success fa-2x'></i>
                    </div>
                    <h3 className='h5'>Serviços Publicos</h3>
                    <p className='mb-0'>
                    Otimização da recepção dos cidadãos e simplificação dos serviços são desafios para o setor público. As soluções de gestão de atendimento e de mobilidade do myturn, personalizáveis, inovam as operações de atendimento ao cidadão e reduzem os tempos de espera.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <div className='cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0'>
                    <div className='feature-icon d-inline-block bg-primary-soft rounded-circle mb-32'>
                      <i className='fad fa-cart-shopping text-primary fa-2x'></i>
                    </div>
                    <h3 className='h5'>Retalho</h3>
                    <p className='mb-0'>
                    O portal e a aplicação móvel myturn permitem ao seu cliente pesquisar os produtos online e finalizar a compra na loja. Com a solução de agendamento e marcações proporcione aos clientes uma experiencia de compra integrada e personalizada.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <div className='cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0'>
                    <div className='feature-icon d-inline-block bg-danger-soft rounded-circle mb-32'>
                      <i className='fa-solid fa-bolt text-danger fa-2x'></i>
                    </div>
                    <h3 className='h5'>Utilities</h3>
                    <p className='mb-0'>
                    As soluções de agendamento e gestão de filas myturnt, para centros de atendimento de Utilities, simplificam a jornada do cliente. Com as soluções on-line, móveis e in store, os clientes podem localizar a loja mais próxima, fazer agendamento, check-in, e ser atendido de forma suave e personalizada.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='150'
                >
                  <div className='cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0'>
                    <div className='feature-icon d-inline-block bg-success-soft rounded-circle mb-32'>
                      <i className='fa-solid fa-globe text-success fa-2x'></i>
                    </div>
                    <h3 className='h5'>Outros</h3>
                    <p className='mb-0'>
                    As soluções myturn são intuitivas, versáteis e adaptáveis a qualquer ramo de actividade, independentemente da sua dimensão. Venda bilhetes para eventos, faça a gestão de reservas do seu restaurante, cabeleireiro, centros de estética e muito mais.
                    </p>
                  </div>
                  <div className='dot-shape-bg position-absolute z--1 right--40 bottom--40'>
                    <img src='assets/img/shape/dot-big-square.svg' alt='shape' />
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
        <section className='feature-section ptb-120'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='50'
                >
                  <div className='mb-3 cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0 z-2'>
                    <div className='feature-icon d-inline-block bg-primary-soft rounded-circle mb-32'>
                      <i className='fa-solid fa-piggy-bank text-primary fa-2x'></i>
                    </div>
                    <h3 className='h5'>Banking</h3>
                    <p className='mb-4'>
                    myturn technological innovation helps banks transform their branch services, increase service levels, and boost sales. Give customers an omni-channel experience.
                    </p>
                  </div>
  
                  <div className='dot-shape-bg position-absolute z--1 left--40 top--40'>
                    <img src='assets/img/shape/dot-big-square.svg' alt='shape' />
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <div className='mb-3 cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0'>
                    <div className='feature-icon d-inline-block bg-danger-soft rounded-circle mb-32'>
                      <i className='fa-solid fa-heart-pulse text-danger fa-2x'></i>
                    </div>
                    <h3 className='h5'>Health</h3>
                    <p className='mb-0'>
                    myturn provides hospitals, clinics, laboratories and pharmacies, agile service solutions that enable the management of work processes according to customer flow, increasing operational efficiency and service quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <div className='mb-3 cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0'>
                    <div className='feature-icon d-inline-block bg-success-soft rounded-circle mb-32'>
                      <i className='fa-solid fa-chair-office text-success fa-2x'></i>
                    </div>
                    <h3 className='h5'>Public services</h3>
                    <p className='mb-0'>
                    Optimizing the reception of customers and simplifying services are challenges for the public sector. myturn customizable management solutions, innovate customer service operations and reduce waiting time.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <div className='cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0'>
                    <div className='feature-icon d-inline-block bg-primary-soft rounded-circle mb-32'>
                      <i className='fad fa-cart-shopping text-primary fa-2x'></i>
                    </div>
                    <h3 className='h5'>Retail</h3>
                    <p className='mb-0'>
                    myturn portal and mobile application allow your customer to search the products online and finalize the purchase in the store. With the scheduling solution, provide customers with an integrated, customized shopping experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <div className='cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0'>
                    <div className='feature-icon d-inline-block bg-danger-soft rounded-circle mb-32'>
                      <i className='fa-solid fa-bolt text-danger fa-2x'></i>
                    </div>
                    <h3 className='h5'>Utilities</h3>
                    <p className='mb-0'>
                    myturn queue management and scheduling solutions for Utilities service centers simplifies the customer journey. With on-line, mobile and in-store solutions, customers can locate the nearest store, schedule, check in, and be served in a smooth, personalized way.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-delay='150'
                >
                  <div className='cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0'>
                    <div className='feature-icon d-inline-block bg-success-soft rounded-circle mb-32'>
                      <i className='fa-solid fa-globe text-success fa-2x'></i>
                    </div>
                    <h3 className='h5'>Others</h3>
                    <p className='mb-0'>
                    myturn solutions are intuitive, versatile and adaptable to any branch of activity, regardless of their size. Sell tickets for events, manage the reservations of your restaurant, hairdresser, beauty centers and more.
                    </p>
                  </div>
                  <div className='dot-shape-bg position-absolute z--1 right--40 bottom--40'>
                    <img src='assets/img/shape/dot-big-square.svg' alt='shape' />
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

export default FeatureFour;
