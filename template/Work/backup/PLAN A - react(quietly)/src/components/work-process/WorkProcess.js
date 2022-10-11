import React from 'react';
import SectionTitle from '../common/SectionTitle';

const WorkProcess = () => {
  return (
    <>
      <section className='work-process ptb-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-10'>
              <SectionTitle
                title='Cloud Platform'
                centerAlign
              />
            </div>
          </div>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-4 col-md-12 order-1 order-lg-0'>
              <div className='img-wrap'>
                <img
                  src='assets/img/office-img-11.png'
                  alt='work process'
                  className='img-fluid rounded-custom'
                />
              </div>
            </div>
            <div className='col-lg-8 col-md-12 order-0 order-lg-1'>
              <ul className='work-process-list list-unstyled'>
              <li className='d-flex align-items-start mb-4'>
                  <div className='process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2'>
                  <i class="fa-solid fa-cloud"></i>
                  </div>
                  <div className='icon-content'>
                    <h3 className='h5 mb-2'>Cloud</h3>
                    <p>
                      Direct connection from any location at any time.
                    </p>
                  </div>
                </li>
                <li className='d-flex align-items-start mb-4 mb-lg-0'>
                  <div className='process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2'>
                  <i class="fa-solid fa-shield-check"></i>
                  </div>
                  <div className='icon-content'>
                    <h3 className='h5 mb-2'>Security</h3>
                    <p>
                      Integral data protection at low cost.
                    </p>
                  </div>
                </li>
                <li className='d-flex align-items-start mb-4 mb-lg-0'>
                  <div className='process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2'>
                  <i class="fa-solid fa-rocket-launch"></i>
                  </div>
                  <div className='icon-content'>
                    <h3 className='h5 mb-2'>Light network</h3>
                    <p>
                      Low weight for the communication network.
                    </p>
                  </div>
                </li>
                <li className='d-flex align-items-start mb-4 mb-lg-0'>
                  <div className='process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2'>
                  <i class="fa-solid fa-rabbit-running"></i>
                  </div>
                  <div className='icon-content'>
                    <h3 className='h5 mb-2'>Fast recovery</h3>
                    <p>
                    Immediate recovery to breaking point (Without costs of structure, servers, DBs, maintenance Preventive, updated Backups ….)
                    </p>
                  </div>
                </li>
                <li className='d-flex align-items-start mb-4'>
                  <div className='process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2'>
                  <i class="fa-brands fa-windows"></i>
                  </div>
                  <div className='icon-content'>
                    <h3 className='h5 mb-2'>No operating system</h3>
                    <p>
                    Total independence of operating system, equipment, access conditions, business structure, …
                    </p>
                  </div>
                </li>
                <li className='d-flex align-items-start mb-4'>
                  <div className='process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2'>
                  <i class="fa-solid fa-ticket"></i>
                  </div>
                  <div className='icon-content'>
                    <h3 className='h5 mb-2'>Easy ticket</h3>
                    <p>
                    Virtual tickets from any device
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;
