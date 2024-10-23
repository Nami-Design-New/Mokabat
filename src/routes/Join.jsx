import { useState } from "react";
import ApplyForJobModal from "../ui/ApplyForJobModal";
import SectionHeader from "../ui/layout/SectionHeader";

export default function Join() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <SectionHeader />
      <section className="join_page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 p-2 mb-5">
              <div className="header">
                <h1>Let&apos;s Make An Impact</h1>
                <p>
                  Every day, beliefs influence what we do, our relationships,
                  and our triumphs. At mokabat, we operate by a steadfast
                  commitment to four core ideals that motivate us to provide the
                  greatest services and work environment for all of our
                  stakeholders, a testament to our mission and vision.
                </p>
              </div>
            </div>
            <div className="col-12 p-2 pt-5 pb-5">
              <div className="join_header">
                <h2>
                  Open <span>Vacancies</span>
                </h2>
                <div className="filter_form">
                  <div className="search_form">
                    <input type="text" placeholder="Search..." />
                    <button>
                      <i className="fa-light fa-magnifying-glass"></i>
                    </button>
                  </div>
                  <select name="job_type" id="job_type">
                    <option value="all">All</option>
                    <option value="human_capital">
                      Human Capital Department
                    </option>
                    <option value="marketing">
                      Marketing and Communication
                    </option>
                    <option value="sales">
                      Sales and Business Development
                    </option>
                    <option value="digital_factory">Digital Factory</option>
                    <option value="digital_lab">Digital Lab </option>
                    <option value="digital_platform">Digital Platform</option>
                    <option value="finance_accounting">
                      Finance and Accounting
                    </option>
                    <option value="information_technology">
                      Information Technology
                    </option>
                    <option value="pmo">PMO</option>
                    <option value="digital_studio">Digital Studio </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="vacancies">
              <div className="vacancy_card">
                <h6>Risk Manager</h6>
                <p>
                  Sales Manager Responsibilities: Managing organizational sales
                  by developing a business plan that covers sales, revenue, and
                  expense controls. Meeting planned sales goals. Setting
                  individual sales targets with the sales team. Tracking sales
                  goals and reporting results as necessary. Overseeing the
                  activities and performance of the sales team. Coordinating
                  with marketing on lead generation. The ongoing training of
                  your salespeople. Developing your sales team through
                  motivation, counseling, and product knowledge education.
                </p>
                <div className="bottom">
                  <span>
                    <i className="fa-regular fa-user"></i> 0 Applicants
                  </span>
                  <button onClick={() => setShowModal(true)}>Apply Now</button>
                </div>
              </div>
              <div className="vacancy_card">
                <h6>Sales Manager</h6>
                <p>
                  Sales Manager Responsibilities: Managing organizational sales
                  by developing a business plan that covers sales, revenue, and
                  expense controls. Meeting planned sales goals. Setting
                  individual sales targets with the sales team. Tracking sales
                  goals and reporting results as necessary. Overseeing the
                  activities and performance of the sales team. Coordinating
                  with marketing on lead generation. The ongoing training of
                  your salespeople. Developing your sales team through
                  motivation, counseling, and product knowledge education.
                </p>
                <div className="bottom">
                  <span>
                    <i className="fa-regular fa-user"></i> 0 Applicants
                  </span>
                  <button onClick={() => setShowModal(true)}>Apply Now</button>
                </div>
              </div>
              <div className="vacancy_card">
                <h6>IT Senior Manager</h6>
                <p>
                  Sales Manager Responsibilities: Managing organizational sales
                  by developing a business plan that covers sales, revenue, and
                  expense controls. Meeting planned sales goals. Setting
                  individual sales targets with the sales team. Tracking sales
                  goals and reporting results as necessary. Overseeing the
                  activities and performance of the sales team. Coordinating
                  with marketing on lead generation. The ongoing training of
                  your salespeople. Developing your sales team through
                  motivation, counseling, and product knowledge education.
                </p>
                <div className="bottom">
                  <span>
                    <i className="fa-regular fa-user"></i> 0 Applicants
                  </span>
                  <button onClick={() => setShowModal(true)}>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ApplyForJobModal showModal={showModal} setShowModal={setShowModal} />
      </section>
    </>
  );
}
