import { Link } from "react-router-dom";

export default function Actions() {
  return (
    <section className="actions_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2 mb-4">
            <div className="header">
              <h2>Actions</h2>
              <p>
                Explore our diverse Programs for start-ups and small companies,
                or join empowering Bootcamps led by expert instructors.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-12 p-3">
            <div className="program_card">
              <img src="/images/tektalk_outer_image.webp" alt="" />
              <Link to="/programs/tektalk" className="program_link">
                <h6>Tektalk</h6>
                <div className="hiddenText">
                  <p>
                    As pioneers in technology and fintech, we introduce the
                    TekTalk program: an exclusive series of sessions discussing
                    cutting-edge tech topics. Initially for Financial Tech
                    Aspires ,
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-5 col-12 p-3">
            <div className="program_card">
              <img src="/images/mokabat_-_Cart_-_Speak_to_inspire.webp" alt="" />
              <Link to="/programs/speak-to-inspire" className="program_link">
                <h6>Speak To Inspire</h6>
                <div className="hiddenText">
                  <p>
                    We&apos;re dedicated to fostering Fintech and tech skills
                    within our community. Join us to empower individuals and
                    shape a formidable future.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
