import React from 'react';
import SectionTitle from '../common/SectionTitle';

const FeatureTwo = ({ cardDark }) => {
  if(localStorage.language === undefined) {
    return (
      <>
        <section
          className={`feature-section ptb-120 ${
            cardDark ? 'bg-dark' : 'bg-light'
          }`}
        >
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 col-md-10'>
                {cardDark ? (
                  <SectionTitle
                    title='Soluções'
                    description='A experiência do consumidor é considerada cada vez mais uma estratégia de negócios relevante, lançando desafios únicos para a maioria das empresas. myturn oferece um leque de soluções que permitem as diferentes actividades a responder a esses desafios
                    '
                    centerAlign
                    dark
                  />
                ) : (
                  <SectionTitle
                    title='Soluções'
                    description='A experiência do consumidor é considerada cada vez mais uma estratégia de negócios relevante, lançando desafios únicos para a maioria das empresas. myturn oferece um leque de soluções que permitem as diferentes actividades a responder a esses desafios
                    '
                    centerAlign
                  />
                )}
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-calendar-clock icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h1 className='h3'>Agendamento e Marcações</h1>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Converta potenciais clientes em clientes efectivos oferecendo-lhes o agendamento imediato livre de burocracias.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn Scheduling apointement é uma solução de agendamento e marcações centralizada na Cloud, escalável, adaptada para os diferentes locais e fusos horários, rápida de implementar e de fácil manutenção.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          A solução de agendamento/marcações oferece-lhe um conjunto de ferramentas que permitem aos seus clientes fazer agendamentos presenciais e on-line, para os serviços pretendidos, através do portal ou de aplicativos móveis.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Planeie antecipadamente a alocação dos seus recursos aos serviços e crie agendas por recursos, possibilitando aos seus clientes escolher por quem serão atendidos.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          No segmento de retalho, concilie o stock de produtos com a criação de agendas , permitindo o agendamento apenas quando o produto estiver disponível para entrega
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Use os dados estatísticos de atendimento como ferramenta de planeamento e optimize os recursos
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Proporcione aos seus clientes um atendimento mais ágil e organizado minimizando o tempo de espera
                        </li>
                      </ul>
                    </div>
                    <h6 className='mt-4 text-decoration-underline h5'>Funcionalidades</h6>
                    <div className='feature-content'>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Interface de administrator
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Configuração e gestão de agendas dos agentes e disponibilidade de recursos: criar, abrir e fechar agendas, criar e gerir e alterar horários, reagendamentos, permissões de gestão e de acesso, entre outros
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Interface de utilizador intuitivo e de fácil de utilização
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Preparado para responder às várias indústrias, independentemente do número de dependências/departamentos, serviços e agentes
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Pagamentos online no momento da reserva
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Portal myturn, interface Web, self servisse, que permite o agendamento online pelos clientes: pesquisa de locais, definição do percurso, pesquisa de serviços, agendamentos por dia e hora, confirmação por email e cancelamentos
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          App de Cliente myturn, permite aos utilizadores efectuar marcações, através do seu dispositivo móvel. Oferece pesquisa de locais, definição do percurso , pesquisa de serviços, agendamentos por dia e hora, lembretes e notificações em tempo real sobre o estado das filas e cancelamentos
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Customer Feed-back tools
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Definições de configuração remotas
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-person icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>GESTÃO DE FILAS</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Desenvolvemos o myturn para que ofereça aos seus clientes experiências de atendimento agradáveis e eficientes, direccionando-os aos serviços pretendidos e proporcionando-lhes o uso ideal de seu tempo
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn Queue management é uma solução escalável , versátil e fácil de utilizar, configurável às necessidades e dimensões dos diferentes tipos industria.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn Queue management, oferece-lhe um conjunto de ferramentas que permitem aos gestores gerir as filas em tempo real de acordo com o fluxo de clientes, agilizando o atendimento e controlando o desempenho e os níveis de serviço
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn Queue management oferece aos seus clientes uma experiencia única de atendimento de ponta a ponta, combina filas de espera tradicionais com filas de espera inteligentes assentes em soluções de mobilidade, proporcionando aos seus clientes uma experiencia de atendimento organizada.
                        </li>
                      </ul>
                    </div>
                    <h6 className='mt-4 text-decoration-underline h5'>Funcionalidades</h6>
                    <div className='feature-content'>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Os interfaces são web, fáceis de usar e bastante intuitivos e compatíveis em qualquer device
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          As funções de backoffice permitem para todos os locais e serviços a criação, gestão e controlo de fila. Incluem ainda a abertura e fecho, chamar o próximo cliente, chamar uma senha específica, transferir um cliente para outra fila, transferir um cliente para outro colaborador, rechamada de cliente, chamada por voz e muitas outras opções
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                            O sistema de backoffice disponibiliza regras para prioridades, em filas específicas, fornecendo agilidade ao fluxo de atendimento. Permite também o balanceamento de carga entre filas, dando assim relevo às actividades mais importantes do seu negócio                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          As funcionalidades do backoffice permitem ainda identificar em real time, através de estatísticas de fluxo de clientes os picos de afluência, permitindo alocar recursos necessários, abrir novos postos ou deslocar recursos para colmatar essas situações
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Os agendamentos são intercalados na fila pelo horário da marcação, sendo possível a sua chamada com ou sem exibição no monitor de chamadas
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Os relatórios e gráficos dão em tempo real a os tempos de espera, os níveis de serviço e o desempenho dos colaboradores por local ou até por serviço
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Relatórios e gráficos de senhas emitidas, senhas atendidas, e de desistências
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Os relatórios agregam informação quer do atendimento das marcações quer do atendimento das filas de espera, permitindo ter métricas integradas
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Disponibilização de relatório com informação sobre o feed-back dos clientes

                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          A senha em papel permite fazer o seu branding, personalizando o layout pretendido, desde o logotipo, nome do serviço, existência de QRCode, data/hora de chegada, ou até alguma mensagem promocional
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          O Ecrã de chamada para além do número das senhas e marcações, para os diferentes serviços e postos de atendimento, pode ainda ser complementado com outro tipo de informação como temperatura do ar, data e hora, noticias, imagens ou até mensagens e vídeos institucionais ou promocionais.
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Configurações remotas a partir da cloud disponibilizadas de imediato
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Escalável, sem limite de número de locais, utilizadores e serviços
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fal fa-analytics icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>Comércio omni-channel</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Com a myturn seja uma empresa omnichannel, integre os canais de vendas, online e físico, proporcione aos seus clientes uma excelente experiência de compra e aumente as vendas
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Na viagem para o trabalho o seu cliente vê um produto interessante no Facebook, guarda o link para ver no desktop na pausa do almoço, na viagem de regresso a casa, pelo smartphone realiza a compra e faz o agendamento para recolha do produto na loja, em data e hora que melhor lhe convém. Na data e hora agendada dirige-se à loja física e é recebida por um vendedor, que lhe faz a entrega do produto de forma individualizada e personalizada
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Este conceito de venda dá uma verdadeira continuidade da experiência de compra e conduz estrategicamente o consumidor à loja física para que este amplie a sua experiencia com a marca
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          A plataforma myturn oferece as soluções para a implementação do processo “buy online and pick up in store” proporcionando uma experiencia de compra integrada verdadeiramente omnichannel
                        </li>
                      </ul>
                    </div>
                    <h6 className='mt-4 text-decoration-underline h5'>Funcionalidades</h6>
                    <div className='feature-content'>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          A solução de agendamento e marcações myturn permite a configuração e gestão de agendas dos agentes e disponibilidade de recursos: criar, abrir e fechar agendas, criar e gerir e alterar horários, reagendamentos, permissões de gestão e de acesso, entre outros
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          A interface do vendedor da loja , desktop ou tablet, com identificação das marcações
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Customer Service Portal myturn, interface Web self-service, que permite aos clientes agendar marcações, e às empresas fazer de campanhas publicitárias online
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Customer Service App myturn Interface móvel, personalizável que permite aos clientes agendar, cancelar e reagendar marcações online através de dispositivos móveis e fazer check-in das marcações
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Integração com a solução gestão de filas no pós check-in
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Notificações automáticos ao cliente, parametrizáveis com detalhes da marcação
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Integração com ERP e CRM
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Configurações remotas a partir da cloud disponibilizadas de imediato
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Escalável, sem limite de número de locais, utilizadores e serviços
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-mobile-screen-button icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>App e Portal de Serviços ao Cliente</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn , oferece aos clientes soluções de mobilidade facilitando o acesso aos seus serviços a partir de qualquer lugar
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Disponibilização gratuita de aplicação móvel e de um portal web, através dos quais os utilizadores podem interagir directamente com os locais de atendimento, quer sejam lojas comercias, Instituições publicas, clinicas, entre outros
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Quer o Portal quer as aplicações móveis apoiam o cliente em todo o processo de interacção: inicia com a pesquisa de um local, escolha do serviço, agendamento/ marcação ou emissão de uma senha virtual, atendimento e avaliação
                        </li>
                      </ul>
                    </div>
                    <h6 className='mt-4 text-decoration-underline h5'>Funcionalidades</h6>
                    <div className='feature-content'>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Localização de serviços por georeferência, por nome, por categoria e por proximidade e por tempo de espera mais curto
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Agendamentos e marcações de serviços
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Senhas virtuais para os serviços disponibilizados on-line
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Cancelamentos de agendamentos e de senhas virtuais
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Aplicação móvel que permite ao consumidor subscrever serviços de atendimento, identificando o número de clientes e o tempo médio em espera
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          A aplicação móvel permite configurar e receber alertas nos atrasos das marcações
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          A aplicação móvel permite configurar e receber alertas da proximidade de vez da fila
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Histórico de atendimento
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Portal com personalização de Serviços favoritos
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Portal com plantas dos locais de atendimento
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Avaliação do atendimento prestado
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-comment-smile icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>Satisfação do Cliente</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          No mercado cada vez mais competitivo, é essencial que as empresas e instituições se preocupem com a satisfação do cliente e a melhor maneira de saber o que cliente pensa sobre seu negócio é ouvir o que ele tem a dizer
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          O myturn integra mecanismos de recolha e tratamento de informação sobre a satisfação do cliente que produzem informação de gestão de apoio à tomada de decisão
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Com o feed-back dos clientes você será capaz de saber o que precisa mudar ou melhorar na organização, otimizar seus processos ou mesmo reduzir custos e fazer melhores investimentos. Superar a expectativa dos clientes, oferecendo mais do que ele esperam, contribui para a sua satisfação e fidelização. Clientes fiéis e satisfeitos promovem seu negócio entre amigos e familiares e consequentemente, atraem novos clientes
                        </li>
                      </ul>
                    </div>
                    <h6 className='mt-4 text-decoration-underline h5'>Funcionalidades</h6>
                    <div className='feature-content'>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Centralizado, permitindo o acesso aos dados a partir de qualquer dispositivo e de qualquer lugar
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Fornece feedback em tempo real, o que ajuda a melhorar a qualidade imediata do serviço
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Configurações remotas e centralizadas
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn feed back integra com outras plataformas tecnológicas
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-chart-pie icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>Informação Analítica</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn informação analítica, disponibiliza aos gestores informação actualizada e precisa, referente a todos os momentos da “viagem do cliente”
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Com myturn analytical Information obtém informação simples ou agregada, desde senhas emitidas ou marcações agendadas, tempos de espera, atendimentos efectuados, desempenho do pessoal, feedback dos clientes, entre outros
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          As estatísticas de atendimento, em tempo real, representadas em Dashboard permitem uma gestão de grande proximidade, possibilitando intervenções sempre que tal se justifique, contribuindo assim para aumentar a performance do serviço
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Tendo em conta a importância da informação de gestão no planeamento e optimização de recursos, bem como na melhoria de qualidade de produtos e serviços prestados, a informação gerada pelo myturn é disponibilizada de forma simples e intuitiva, em relatórios personalizados e visualizada em gráficos
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-puzzle-piece icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>Conector API Integrador</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          A arquitectura da plataforma myturn foi desenvolvida de forma a facilitar a ligação e a troca de informação com outros sistemas
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          As Interfaces de Programação de Aplicação (API) da myturn são um conjunto de mecanismos e normas, para aceder e integrar a funcionalidade de atendimento, filas, agendamentos, ou marcações em sites de e-commerce ou aplicações empresariais. Estas tecnologias complexas foram concebidas para corresponder às necessidades dos clientes que exigem a máxima flexibilidade e agilidade durante a integração.
                        </li>
                      </ul>
                    </div>
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
        <section
          className={`feature-section ptb-120 ${
            cardDark ? 'bg-dark' : 'bg-light'
          }`}
        >
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 col-md-10'>
                {cardDark ? (
                  <SectionTitle
                    title='Solutions'
                    description='Consumer experience is increasingly considered a relevant business strategy, setting unique challenges for most companies. myturn offers a range of solutions that enable different activities to respond to these challenges
                    '
                    centerAlign
                    dark
                  />
                ) : (
                  <SectionTitle
                    title='Solutions'
                    description='Consumer experience is increasingly considered a relevant business strategy, setting unique challenges for most companies. myturn offers a range of solutions that enable different activities to respond to these challenges
                    '
                    centerAlign
                  />
                )}
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-calendar-clock icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h1 className='h3'>Appointment scheduling</h1>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Turn potential customers into effective clients by offering them immediate scheduling free of bureaucracies.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn Scheduling support is a scalable, scalable, scalable scheduling and scheduling solution tailored to different locations and time zones, fast to deploy and easy to maintain.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The scheduling / scheduling solution provides you with a set of tools that allow your customers to schedule in-person and online, for the intended services, through the portal or mobile applications.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Plan in advance the allocation of your resources to services and create schedules by resources, allowing your customers to choose who will be served.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          In the retail segment, reconcile product stock by creating schedules, allowing scheduling only when the product is available for delivery
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Use statistical service data as a planning tool and optimize resources
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Provide your customers with a more agile and organized service, minimizing waiting time
                        </li>
                      </ul>
                    </div>
                    <h6 className='mt-4 text-decoration-underline h5'>Features</h6>
                    <div className='feature-content'>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Administrator interface
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Configuration and management of agents’ schedules and availability of resources: create, open and close schedules, create and manage schedules, rescheduling, management and access permissions, among others
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Intuitive and user-friendly user interface
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Prepared to respond to various industries, regardless of number of dependencies / departments, services and agents
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Payments online at the time of booking
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Portal myturn, web interface, self service, which allows online scheduling by clients: site search, route definition, service search, day and time schedules, email confirmation and cancellations
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn Client App, allows users to dial through their mobile device. Provides location search, route definition, service search, day and time schedules, reminders, and real-time notifications about queue status and cancellations
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Customer Feed-back tools
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Remote configuration settings
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-person icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>Queue management</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          We develop myturn to provide your customers with pleasant and efficient customer service experiences, driving them to the services they want and providing them with the optimal use of their time
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn Queue management is a scalable, versatile and easy-to-use solution, configurable to the needs and dimensions of different industry types
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn Queue management provides you with a set of tools that enable managers to manage queues in real-time according to customer flow, streamline service and control performance and service levels
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn Queue management offers its customers a unique end-to-end service experience, combines traditional waiting queues with smart queues based on mobility solutions, providing their customers with an organized service experience
                        </li>
                      </ul>
                    </div>
                    <h6 className='mt-4 text-decoration-underline h5'>Features</h6>
                    <div className='feature-content'>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The interfaces are web, easy to use and very intuitive and compatible on any device
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Backoffice functions allow for all locations and services to create, manage, and queue control. They also include opening and closing, calling the next customer, calling a specific password, transferring a customer to another queue, transferring a client to another collaborator, client callback, voice calling, and many other options
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The backoffice system provides rules for priorities, in specific queues, providing agility to the flow of care. It also allows load balancing between queues, thus giving prominence to the most important activities of your business
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Backoffice features also allow real-time identification of peak flows through customer flow statistics, allowing the allocation of necessary resources, opening new stations, or shifting resources to address these situations
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Schedules are interleaved in the queue by the dialing time, being possible to call with or without display in the call monitor
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Reports and graphs give real-time waiting times, service levels and employee performance by location or even by service
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Reports and graphs of passwords issued, passwords answered, and withdrawals
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Scalable, with no limit to the number of sites, users and services
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The reports aggregate information on both the fulfillment of the markings and the waiting queues, allowing to have integrated metrics
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Reporting with feedback on customer feedback
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The password on paper allows you to make your branding by customizing the desired layout, from the logo, service name, QRCode existence, date / time of arrival, or even a promotional message
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The Call screen in addition to the number of passwords and markings for the different services and answering stations can also be complemented with other information such as air temperature, date and time, news, images or even institutional messages and videos or promotional campaigns
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Remote configurations from the cloud made available immediately
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fal fa-analytics icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>Omnichannel Commerce</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          With myturn as an omnichannel company, integrate online and physical sales channels, provide your customers with a great shopping experience and increase sales.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          On the way to work, his client sees an interesting product on Facebook, saves the link to see on the desktop at the lunch break, on the way back home, the smartphone makes the purchase and schedules the collection of the product in the store, at a time and date that suits you best. At the scheduled date and time, he / she goes to the physical store and is received by a salesman, who makes the delivery of the product in an individualized and personalized way
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          This concept of sale gives a true continuity of the buying experience and strategically leads the consumer to the physical store so that it expands its experience with the brand
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The myturn platform offers the solutions for the implementation of the process “buy online and pick up in store” providing a truly integrated purchasing experience omnichannel
                        </li>
                      </ul>
                    </div>
                    <h6 className='mt-4 text-decoration-underline h5'>Features</h6>
                    <div className='feature-content'>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn scheduling solution enables configuration and management of agent schedules and resource availability: create, open and close schedules, create and manage schedules, rescheduling, management and access permissions, and more
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Store, desktop, or tablet retailer interface with tag attendance identification
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Customer Service Portal myturn, self-service Web interface, which allows customers to schedule appointments, and companies to make online advertising campaigns
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Customer Service App myturn Mobile, customizable interface that allows customers to schedule, cancel, and reschedule online via mobile devices and check appointments
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Integration with the Queue Management solution after the check-in
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Automatic customer notifications, configurable with marking details
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Integration with ERP and CRM
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Remote configurations from the cloud made available immediately
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Scalable, with no limit to the number of sites, users and services
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-mobile-screen-button icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>Customer Service App and Portal</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn, offers customers mobility solutions that make it easy to access their services from anywhere.
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Free provision of a mobile application and a web portal through which users can interact directly with the service locations, whether commercial stores, public institutions, clinics, among others
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Both the Portal and the mobile applications support the customer in the whole process of interaction: it starts by searching for a place, choosing the service, scheduling / marking or issuing a virtual password, service and evaluation
                        </li>
                      </ul>
                    </div>
                    <h6 className='mt-4 text-decoration-underline h5'>Features</h6>
                    <div className='feature-content'>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Location of services by georeference, by name, by category and by proximity and by shorter waiting time
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Scheduling and attendance
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Virtual tickets for services available online
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Cancellations of schedules and virtual tickets
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Mobile application that allows the consumer to subscribe to customer service, identifying the number of customers and the average waiting time
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The mobile application allows you to configure and receive alerts on the delays of the markings
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The mobile application allows you to set up and receive alerts from the queue once in a while.
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Attendance history
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Portal with customized Services customization
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Portal with plants of the places of attendance
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Evaluation of the attendance provided
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-comment-smile icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>Customer Feed-Back Tools</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          In the increasingly competitive marketplace, it is essential that companies and institutions care about customer satisfaction and the best way to know what customer thinks about your business is to listen to what it has to say
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn integrates mechanisms for collecting and processing information about customer satisfaction that produce management information to support decision making
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          With customer feedback you will be able to know what needs to change or improve in the organization, optimize your processes or even reduce costs and make better investments. Exceeding the expectation of customers, offering more than they expect, contributes to their satisfaction and loyalty. Faithful and satisfied customers promote their business among friends and family and consequently attract new customers
                        </li>
                      </ul>
                    </div>
                    <h6 className='mt-4 text-decoration-underline h5'>Features</h6>
                    <div className='feature-content'>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Centralized, access to data from any location
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Provides organizations real time feedback, which helps to improve immediate service quality
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Remote configurations from the cloud, available immediately
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Scalable, with no limit to the number of places, users and services
                        </li>
                        <li className='py-1'>
                        <i
                            className={`fa-solid fa-lightbulb me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn feedback tools integrates with other technology platforms
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-chart-pie icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>Analytics Information</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          myturn analytical information, provides managers with up-to-date and accurate information on all moments of the customer’s journey
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          With myturn analytical information you get simple or aggregated information, from issued passwords or scheduled appointments, waiting times, calls made, staff performance, customer feedback, among others
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The real-time service statistics represented in the dashboard allow for close proximity management, allowing interventions whenever appropriate, thus contributing to increased service performance
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Taking into account the importance of management information in planning and optimizing resources, as well as improving the quality of products and services provided, the information generated by myturn is made available in a simple and intuitive way, in personalized reports and visualized in graphs
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`shadow-sm highlight-card rounded-custom p-5 mb-5 ${
                      cardDark
                        ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                        : 'bg-white'
                    }`}
                    data-aos='fade-up'
                    data-aos-delay='50'
                  >
                    <div
                      className='
                        icon-box
                        d-inline-block
                        rounded-circle
                        bg-primary-soft
                        mb-32
                      '
                    >
                      <i className='fa-solid fa-puzzle-piece icon-sm text-primary'></i>
                    </div>
                    <div className='feature-content'>
                      <h3 className='h3'>API Integrator</h3>
                      <ul className='list-unstyled mb-0'>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          The architecture of the myturn platform has been developed in a way that facilitates the connection and exchange of information with other systems
                        </li>
                        <li className='py-1'>
                          <i
                            className={`fad fa-check-circle me-2 ${
                              cardDark ? 'text-warning' : 'text-primary'
                            }`}
                          ></i>
                          Application Programming Interfaces (APIs) from myturn are a set of mechanisms and standards for accessing and integrating service functionality, queues, schedules, or bookmarks into e-commerce sites or business applications. These complex technologies are designed to meet the needs of customers who demand maximum flexibility and agility during integration
                        </li>
                      </ul>
                    </div>
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

export default FeatureTwo;
