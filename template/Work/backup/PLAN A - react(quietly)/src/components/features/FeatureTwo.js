import React from 'react';
import SectionTitle from '../common/SectionTitle';

const FeatureTwo = ({ cardDark }) => {
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
};

export default FeatureTwo;
