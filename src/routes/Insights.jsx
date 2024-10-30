import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Insights() {
  return (
    <section className="insights_page">
      <div className="container">
        <Swiper
          speed={1000}
          loop={true}
          slidesPerView={1}
          spaceBetween={16}
          modules={[Pagination]}
          pagination={{
            el: ".sw_pagiantion",
            clickable: true,
          }}
          className="insights_swiper"
        >
          <SwiperSlide>
            <div className="img">
              <img src="/images/CBDC.jpg" alt="" />
              <div className="content">
                <h2>Insights</h2>
                <h4>Transforming Finance and Banking</h4>
                <p>
                  <strong>
                    Strategies for Banks in a Digital Currency World
                  </strong>
                </p>
                <p>
                  Central Bank Digital Currency (CBDC) is gaining traction
                  worldwide as countries explore its potential benefits,
                  including improved monetary policy design, enhanced financial
                  accessibility, real-time payments, secure and non-commercial
                  transactions, and reduced physical storage requirements.
                  However, CBDC also presents risks like credential theft,
                  misuse of power, double spending, data privacy concerns, and
                  the need for cross-border interoperability. To adapt to this
                  digital shift, banks must prepare by addressing revenue
                  impacts, zero transaction charges, infrastructure setup,
                  sandbox integration, CBDC wallet development, and robust
                  cybersecurity.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/images/Digital-Innovation.jpg" alt="" />
              <div className="content">
                <h2>Insights</h2>
                <h4>Powering Innovation Capabilities</h4>
                <p>
                  <strong>
                    Driving Saudi Arabia's Economic Transformation Through
                    Digital Innovation
                  </strong>
                </p>
                <p>
                  Digital Innovation Capabilities in Banking: A bank's digital
                  innovation prowess is vital in overcoming key industry
                  challenges, including evolving customer expectations and the
                  competitive presence of Fintechs and Big Techs. Bank-led
                  digital innovation centers offer diverse capabilities, from
                  organizing forums and providing advisory services to startups
                  and internal departments, to aiding in solution development
                  and offering testing infrastructure. These centers bring
                  broader benefits to the Saudi ecosystem, fostering innovation,
                  enhancing the banking industry's digitalization, supporting
                  startups, aiding in revenue diversification, and contributing
                  to Saudi Vision 2030, while also offering insights for
                  regulatory
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/images/ESG.jpg" alt="" />
              <div className="content">
                <h2>Insights</h2>
                <h4>Banking for a Better World</h4>
                <p>
                  <strong>Bridging Finance and Responsibility with ESG</strong>
                </p>
                <p>
                  ESG (Environmental, Social, and Governance) is a framework
                  that evaluates how businesses impact the environment, society,
                  and governance. Banks are increasingly focusing on ESG due to
                  its potential for business growth, improved access to capital,
                  regulatory compliance, and enhancing their brand and ethics.
                  Banks offer sustainable products and services such as loans,
                  insurance, and equity investments, with emerging tools like
                  Carbon Financing valuing carbon emissions. However,
                  implementing ESG presents challenges like transition costs,
                  integration into operations, educational gaps, differing ESG
                  scoring methods, data limitations, and the risk of
                  greenwashing.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/images/Fintech-Banking.jpg" alt="" />
              <div className="content">
                <h2>Insights</h2>
                <h4>The Fintech Revolution</h4>
                <p>
                  <strong>Reshaping Financial Services Worldwide</strong>
                </p>
                <p>
                  Fintech is revolutionizing financial services by introducing
                  innovative products, developers, and operators that redefine
                  how transactions are conducted and financial services are
                  delivered. This disruption spans various sectors, including
                  Capital Markets, Core Banking, Cryptocurrency, Digital
                  Banking, Lending, Payments, Regtech, and more. To navigate
                  challenges and expand, fintech companies adopt strategies such
                  as organic growth, strategic mergers and acquisitions,
                  partnerships with established financial institutions, and a
                  relentless focus on customer experience, all aimed at
                  reshaping the financial industry.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="sw_pagiantion"></div>

        <div className="row mt-5">
          <div className="col-lg-3 col- md-6 col-12 p-2">
            <Link className="insight_link">
              <div className="img">
                <img src="/images/CBDC.jpg" alt="" />
                <div className="content">
                  
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col- md-6 col-12 p-2">
            <Link className="insight_link">
              <div className="img">
                <img src="/images/Digital-Innovation.jpg" alt="" />
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col- md-6 col-12 p-2">
            <Link className="insight_link">
              <div className="img">
                <img src="/images/ESG.jpg" alt="" />
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col- md-6 col-12 p-2">
            <Link className="insight_link">
              <div className="img">
                <img src="/images/Fintech-Banking.jpg" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
