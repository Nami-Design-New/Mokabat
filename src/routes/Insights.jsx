import { useEffect } from "react";
import SectionHeader from "../ui/layout/SectionHeader";
import lozad from "lozad";
import SimpleParallax from "simple-parallax-js";

export default function Insights() {
  useEffect(() => {
    const observer = lozad(".lazy", {
      loaded: function (el) {
        el.parentNode.classList.add("loaded");
      },
    });
    observer.observe();
  }, []);

  return (
    <>
      <SectionHeader />
      <section className="projects_page">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 col-12 p-2">
              <div className="project_card">
                <h3 className="title">Transforming Finance and Banking</h3>
                <p className="subtitle">
                  Strategies for Banks in a Digital Currency World
                </p>

                <p className="description">
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

                <a href="" className="download_assets">
                  Download Files{" "}
                  <i className="fa-regular fa-cloud-arrow-down"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="lazyImg">
                <div className="lazyDiv">
                  <div className="lazy">
                    <SimpleParallax speed={0.5} scale={1.2}>
                      <img src="/images/finance.jpg" alt="our_aim" />
                    </SimpleParallax>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row flex-lg-row flex-column-reverse mb-5">
            <div className="col-lg-6 col-12 p-2">
              <div className="lazyImg">
                <div className="lazyDiv">
                  <div className="lazy">
                    <SimpleParallax speed={0.5} scale={1.2}>
                      <img src="/images/digital_finance.jpg" alt="our_aim" />
                    </SimpleParallax>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 p-2">
              <div className="project_card">
                <h3 className="title">Powering Innovation Capabilities</h3>
                <p className="subtitle">
                  Driving Saudi Arabia&apos;s Economic Transformation Through
                  Digital Innovation
                </p>

                <p className="description">
                  Digital Innovation Capabilities in Banking: A bank&apos;s
                  digital innovation prowess is vital in overcoming key industry
                  challenges, including evolving customer expectations and the
                  competitive presence of Fintechs and Big Techs. Bank-led
                  digital innovation centers offer diverse capabilities, from
                  organizing forums and providing advisory services to startups
                  and internal departments, to aiding in solution development
                  and offering testing infrastructure. These centers bring
                  broader benefits to the Saudi ecosystem, fostering innovation,
                  enhancing the banking industry&apos;s digitalization,
                  supporting startups, aiding in revenue diversification, and
                  contributing to Saudi Vision 2030, while also offering
                  insights for regulatory development.
                </p>
                <a href="" className="download_assets">
                  Download Files{" "}
                  <i className="fa-regular fa-cloud-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-6 col-12 p-2">
              <div className="project_card">
                <h3 className="title">The Fintech Revolution</h3>
                <p className="subtitle">
                  Reshaping Financial Services Worldwide
                </p>

                <p className="description">
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
                  reshaping the financial industry. .
                </p>

                <a href="" className="download_assets">
                  Download Files{" "}
                  <i className="fa-regular fa-cloud-arrow-down"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="lazyImg">
                <div className="lazyDiv">
                  <div className="lazy">
                    <SimpleParallax speed={0.5} scale={1.2}>
                      <img src="/images/fintecRevolution.jpg" alt="our_aim" />
                    </SimpleParallax>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row flex-lg-row flex-column-reverse mb-5">
            <div className="col-lg-6 col-12 p-2">
              <div className="lazyImg">
                <div className="lazyDiv">
                  <div className="lazy">
                    <SimpleParallax speed={0.5} scale={1.2}>
                      <img src="/images/betterWorld.jpg" alt="our_aim" />
                    </SimpleParallax>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 p-2">
              <div className="project_card">
                <h3 className="title">Banking for a Better World</h3>
                <p className="subtitle">
                  Bridging Finance and Responsibility with ESG
                </p>

                <p className="description">
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

                <a href="" className="download_assets">
                  Download Files{" "}
                  <i className="fa-regular fa-cloud-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
