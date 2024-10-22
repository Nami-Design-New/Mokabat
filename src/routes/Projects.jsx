import SectionHeader from "../ui/layout/SectionHeader";

export default function Projects() {
  return (
    <>
      <SectionHeader />
      <section className="projects_page">
        <div className="container">
          <h1>
            Mokabat Expertise In <span>Driving Innovation</span>
          </h1>
          <div className="projects">
            <div className="row">
              <div className="col-lg-6 col-12 p-2">
                <div className="project_card">
                  <h3 className="title">MSME PLATFORM</h3>
                  <p className="subtitle">
                    A one-stop solution to simplify banking & day to day
                    business need.
                  </p>

                  <p className="description">
                    A Digital platform integrated with the Ecosystem to serve
                    SME’s to manage their financial affairs & Growing their
                    business
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12 p-2">
                <div className="img">
                  <img src="/images/MSME-Platform.png" alt="" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-12 p-2 order-lg-0 order-1">
                <div className="img">
                  <img src="/images/Home-Buying-Ecosystem.webp" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-12 p-2 order-lg-1 order-0 ">
                <div className="project_card">
                  <h3 className="title">HOME BUYING ECOSYSTEM</h3>
                  <p className="subtitle">
                    A Fully Digitalized, Easy To Use Ecosystem Supporting
                    Customers Across Their Home Buying Journey & Brokers
                    Managing their Business
                  </p>

                  <p className="description">
                    Initiate Application Through Integrated Broker Partner
                    Search For Property On Partner portals Get Additional
                    Post-Sales Support Such As Furnishing, Designing… Integrated
                    Eligibility Check With All Relevant Entities Plan Re-Payment
                    And Request For House Maintenance Support Apply And Receive
                    Instant In-Principle Approval
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-12 p-2">
                <div className="project_card">
                  <h3 className="title">CORPORATE RM WORKBENCH</h3>
                  <p className="subtitle">
                    An AI-Powered Frontend Enabling A Step change In Client
                    Relationships. Corporate RMs (Relationship Managers)
                  </p>

                  <p className="description">
                    Detailed RM Performance Management AI-Driven Identification
                    Of Client Potential Automated Pricing Review & Upselling
                    Insights Collaboration & Lead Sharing With Product
                    Specialists AI Recommendations For New Opportunities Bottom
                    Up Target Setting Based On Potential Instant Pipeline
                    Reporting & Account Planning
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12 p-2">
                <div className="img">
                  <img src="/images/CORPORATE-RM.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
