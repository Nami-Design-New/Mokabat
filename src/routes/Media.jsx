import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Media() {
  return (
    <>
      <section className="media_swiper">
        <Swiper
          speed={1000}
          loop={true}
          slidesPerView={1}
          spaceBetween={16}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="media_swiper"
        >
          <SwiperSlide>
            <div className="img">
              <img src="/images/chatgpt.webp" alt="" />
              <div className="content">
                <div className="media_card">
                  <h2>
                    Jeel and KFUPM Sign Memorandum of Understanding to Reinforce
                    R&D in FinTech
                  </h2>
                  <p>
                    In a landmark collaboration, Jeel as the leading digital
                    revolution in financial technologies and King Fahd
                    University of Petroleum and Minerals (KFUPM) have signed a
                    Memorandum of Understanding (MoU), marking the start of a
                    strategic partnership that aims to foster innovation and
                    talent development in the region. This agreement represents
                    a shared vision to strengthen research and development by
                    co-authoring use cases and exchanging invaluable insights
                    and expertise in fintech and emerging technologies.
                  </p>
                  <button>
                    Download Assets{" "}
                    <i className="fa-regular fa-cloud-arrow-down"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="/images/speak_to_inspire2.webp" alt="" />
              <div className="content">
                <div className="media_card">
                  <h2>Speak To Inspire</h2>
                  <p>
                    In our unwavering pursuit of excellence, Jeel embarked on a
                    transformative journey to empower our community with
                    advanced skills in Fintech and technology. Guided by the
                    vision of fostering capable and empowered individuals, we
                    introduced the Act to Inspire series of workshops. These
                    meticulously curated sessions aimed to elevate the
                    communication, storytelling, and presentation abilities of
                    our esteemed team members.
                  </p>
                  <button>
                    Download Assets{" "}
                    <i className="fa-regular fa-cloud-arrow-down"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

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
