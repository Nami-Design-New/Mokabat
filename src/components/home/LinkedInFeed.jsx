import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function LinkedInFeed() {
  return (
    <section className="linkedin_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-5">
            <div className="header">
              <h2>
                LinkedIn <span>Feed</span>
              </h2>
              <a
                href="https://www.linkedin.com/in/mokabat/"
                target="_blank"
                rel="noreferrer"
              >
                Follow Us
              </a>
            </div>
          </div>
          <div className="col-lg-12 p-2">
            <Swiper
              speed={4000}
              loop={true}
              slidesPerView={5}
              spaceBetween={24}
              modules={[Autoplay]}
              className="linkedin_swiper"
              autoplay={{ delay: 0, disableOnInteraction: true }}
              breakpoints={{
                992: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 3,
                },
                350: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="feed">
                  <img src="/images/linkedin1.jpeg" alt="1" />
                  <div className="link">
                    <a
                      href="https://www.linkedin.com/in/mokabat/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feed">
                  <video
                    src="/images/test.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="link">
                    <a
                      href="https://www.linkedin.com/in/mokabat/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feed">
                  <img src="/images/linkedin1.jpeg" alt="1" />
                  <div className="link">
                    <a
                      href="https://www.linkedin.com/in/mokabat/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feed">
                  <img src="/images/linkedin1.jpeg" alt="1" />
                  <div className="link">
                    <a
                      href="https://www.linkedin.com/in/mokabat/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feed">
                  <img src="/images/linkedin1.jpeg" alt="1" />
                  <div className="link">
                    <a
                      href="https://www.linkedin.com/in/mokabat/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feed">
                  <img src="/images/linkedin1.jpeg" alt="1" />
                  <div className="link">
                    <a
                      href="https://www.linkedin.com/in/mokabat/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feed">
                  <img src="/images/linkedin1.jpeg" alt="1" />
                  <div className="link">
                    <a
                      href="https://www.linkedin.com/in/mokabat/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
