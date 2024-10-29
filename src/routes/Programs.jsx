import { Calendar } from "react-multi-date-picker";
import { Link } from "react-router-dom";

export default function Programs() {
  return (
    <section className="programs_page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h3>Programs</h3>
              <p>
                Mokabat is at the forefront of the digital revolution with
                digital squads capable of rapidly prototyping, launching, and
                scaling new products and businesses to serve fintechs,
                government entities, smart cities, and other businesses in the
                market.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="programs_calender">
              <Calendar />
              <div className="programs">
                <h6>Programs</h6>
                <div className="menu">
                  <Link to="/bootcamp/1">
                    <span>Bootcamp 1</span>
                    <p>
                      Welcome to Act to Inspire workshops, meticulously designed
                      to boost your communication, storytelling, and
                      presentation skills. These sessions are tailored to equip
                      you with vital public speaking, writing, and presentation
                      expertise.
                    </p>
                  </Link>
                  <Link to="/bootcamp/1">
                    <span>Bootcamp 1</span>
                    <p>
                      Welcome to Act to Inspire workshops, meticulously designed
                      to boost your communication, storytelling, and
                      presentation skills. These sessions are tailored to equip
                      you with vital public speaking, writing, and presentation
                      expertise.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-6 col-12 p-2">
            <Link to="/bootcamp/1" className="prpgramm_card">
              <div className="img">
                <img src="/images/tektalk_outer_image.webp" alt="" />
              </div>
              <div className="content">
                <p>Friday 18 August 2023</p>
                <h4>TekTalk</h4>
                <p>
                  As pioneers in technology and fintech, we introduce the
                  TekTalk program: an exclusive series of sessions discussing
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 p-2">
            <Link to="/bootcamp/1" className="prpgramm_card">
              <div className="img">
                <img src="/images/tektalk_outer_image.webp" alt="" />
              </div>
              <div className="content">
                <p>Friday 18 August 2023</p>
                <h4>TekTalk</h4>
                <p>
                  As pioneers in technology and fintech, we introduce the
                  TekTalk program: an exclusive series of sessions discussing
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 p-2">
            <Link to="/bootcamp/1" className="prpgramm_card">
              <div className="img">
                <img src="/images/tektalk_outer_image.webp" alt="" />
              </div>
              <div className="content">
                <p>Friday 18 August 2023</p>
                <h4>TekTalk</h4>
                <p>
                  As pioneers in technology and fintech, we introduce the
                  TekTalk program: an exclusive series of sessions discussing
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 p-2">
            <Link to="/bootcamp/1" className="prpgramm_card">
              <div className="img">
                <img src="/images/tektalk_outer_image.webp" alt="" />
              </div>
              <div className="content">
                <p>Friday 18 August 2023</p>
                <h4>TekTalk</h4>
                <p>
                  As pioneers in technology and fintech, we introduce the
                  TekTalk program: an exclusive series of sessions discussing
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
