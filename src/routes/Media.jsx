import { Link } from "react-router-dom";
import SectionHeader from "../ui/layout/SectionHeader";

export default function Media() {
  return (
    <>
      <SectionHeader />
      <section className="media_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 p-2">
              <Link to="/media/1" className="blog_card">
                <div className="img">
                  <img src="/images/blog1.jpg" alt="blog" />
                </div>
                <div className="content">
                  <h4>Design Thinking Unveiled</h4>
                  <div className="foo">
                    <span>
                      <i className="fa-regular fa-calendar"></i> April 10, 2022
                    </span>
                    <span className="link">
                      <img src="/images/arrow.svg" alt="arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-2">
              <Link to="/media/1" className="blog_card">
                <div className="img">
                  <img src="/images/blog1.jpg" alt="blog" />
                </div>
                <div className="content">
                  <h4>Design Thinking Unveiled</h4>
                  <div className="foo">
                    <span>
                      <i className="fa-regular fa-calendar"></i> April 10, 2022
                    </span>
                    <span className="link">
                      <img src="/images/arrow.svg" alt="arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-2">
              <Link to="/media/1" className="blog_card">
                <div className="img">
                  <img src="/images/blog1.jpg" alt="blog" />
                </div>
                <div className="content">
                  <h4>Design Thinking Unveiled</h4>
                  <div className="foo">
                    <span>
                      <i className="fa-regular fa-calendar"></i> April 10, 2022
                    </span>
                    <span className="link">
                      <img src="/images/arrow.svg" alt="arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-2">
              <Link to="/media/1" className="blog_card">
                <div className="img">
                  <img src="/images/blog1.jpg" alt="blog" />
                </div>
                <div className="content">
                  <h4>Design Thinking Unveiled</h4>
                  <div className="foo">
                    <span>
                      <i className="fa-regular fa-calendar"></i> April 10, 2022
                    </span>
                    <span className="link">
                      <img src="/images/arrow.svg" alt="arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-2">
              <Link to="/media/1" className="blog_card">
                <div className="img">
                  <img src="/images/blog1.jpg" alt="blog" />
                </div>
                <div className="content">
                  <h4>Design Thinking Unveiled</h4>
                  <div className="foo">
                    <span>
                      <i className="fa-regular fa-calendar"></i> April 10, 2022
                    </span>
                    <span className="link">
                      <img src="/images/arrow.svg" alt="arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-2">
              <Link to="/media/1" className="blog_card">
                <div className="img">
                  <img src="/images/blog1.jpg" alt="blog" />
                </div>
                <div className="content">
                  <h4>Design Thinking Unveiled</h4>
                  <div className="foo">
                    <span>
                      <i className="fa-regular fa-calendar"></i> April 10, 2022
                    </span>
                    <span className="link">
                      <img src="/images/arrow.svg" alt="arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
