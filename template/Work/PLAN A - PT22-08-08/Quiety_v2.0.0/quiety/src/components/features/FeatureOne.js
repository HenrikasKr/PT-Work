import React from 'react';
import SectionTitle from '../common/SectionTitle';

const FeatureOne = () => {
  
  if(localStorage.language === undefined) {
    return (
      <>
        <section className='feature-promo ptb-120 bg-light' id='what-is-myturn'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 col-md-10'>
                <SectionTitle
                  title='O que é o myturn'
                  centerAlign
                />
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6 '>
                <div className='single-feature-promo p-lg-5 p-3 text-center mt-4 '>
                  <div className='feature-info-wrap'>
                    <p> 
                      <li>
                      myturn é uma plataforma de serviços inteligentes projetada para ajudar sua empresa a otimizar a gestão do “customer journey”
                      </li>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 border-start border-end border-dark'>
                <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                  <div className='feature-info-wrap'>
                    <p>
                      <li>myturn é uma plataforma flexível e modular que reúne um conjunto de soluções que o ajudam a melhorar o atendimento ao cliente e a impulsionar as vendas de forma simples e centralizada, onde quer que esteja, usando um computador e dispositivos móveis</li>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 '>
                <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                  <div className='feature-info-wrap'>
                    <p>
                      <li>
                      myturn foi projetada com uma arquitetura modular para melhor atender às suas necessidades. As interfaces podem ter configurações diferentes, dependendo dos recursos necessários. É simples e fácil de usar e personalizável para sua empresa. Fornece informações atualizadas e análises em tempo real que permitem a coordenação de recursos adequados para os fluxos e processos comerciais
                    </li>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-lg-6 col-md-6border-start border-end border-dark'>
                <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                  <div className='feature-info-wrap'>
                    <p>
                      <li>
                      A myturn fornece uma solução para qualquer nível de requisitos, agendamento e gestão de filas, desde simples, até soluções totalmente integradas de gestão de processos de serviços de omni-channel
                      </li>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                  <div className='feature-info-wrap'>
                    <p className='px-5'>
                    <li>
                    myturn disponibiliza uma solução de filas hibrida, permitindo as opções: paperless, filas de espera tradicionais ou ambas
                    </li>
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
        <section className='feature-promo ptb-120 bg-light' id='what-is-myturn'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 col-md-10'>
                <SectionTitle
                  title='What is myturn?'
                  centerAlign
                />
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6 '>
                <div className='single-feature-promo p-lg-5 p-3 text-center mt-4 '>
                  <div className='feature-info-wrap'>
                    <p> 
                      <li>
                      myturn is a flexible, modular platform that brings together a suite of solutions that help you improve customer service and drive sales simply and centrally, wherever you are, using a computer and mobile devices
                      </li>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 border-start border-end border-dark'>
                <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                  <div className='feature-info-wrap'>
                    <p>
                      <li>myturn is a smart platform designed to help your company optimize the management of a customer journey</li>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 '>
                <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                  <div className='feature-info-wrap'>
                    <p>
                      <li>
                      myturn was designed with a modular architecture to better suit your needs. The interfaces may have different configurations, depending on the features required. Is simple and easy to use and customizable to your business. Provides up-to-date information and real-time analysis allowing the coordination of adequate resources to the flows and business processes
                    </li>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-lg-6 col-md-6border-start border-end border-dark'>
                <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                  <div className='feature-info-wrap'>
                    <p>
                      <li>
                      myturn provides you a solution to any level of requirements, scheduling and queue management, ranging from simple, all the way up to fully integrated, omni-channel service process management solutions
                      </li>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                  <div className='feature-info-wrap'>
                    <p className='px-5'>
                    <li>
                    myturn provides a hybrid queue solution, allowing the options: paperless, traditional queues or both
                    </li>
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

export default FeatureOne;
