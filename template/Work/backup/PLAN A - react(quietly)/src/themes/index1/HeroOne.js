import React from "react";
import HeroTitle from "../../components/common/HeroTitle";

const HeroOne = () => {

  return (
    <>
      <section className="hero-section ptb-120 text-white bg-gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <HeroTitle
                  title="Global queues management and scheduling smartly"
                  desc="Answer the challenges of the consumer with an intelligent and radical way, through a set of solutions that we have created for your business: customer service, sales, back office management and analytical reports"
                  />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5">
              <div className="hero-img position-relative circle-shape-images">
                <img
                  src="assets/img/hero-1.png"
                  alt="hero img"
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroOne;
