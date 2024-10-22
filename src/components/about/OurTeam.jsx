import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function OurTeam() {
  return (
    <section className="our_team_section">
      <div className="container">
        <div className="header">
          <h2>
            Our <span>Team</span>
          </h2>
          <p>
            Our team provides advanced knowledge and capabilities to help you
            create a better tomorrow.
          </p>
        </div>

        <Swiper
          speed={2000}
          loop={true}
          slidesPerView={5}
          spaceBetween={16}
          modules={[Autoplay]}
          className="about_swiper"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            992: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
            350: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="team-member" data-aos="fade-up">
              <div className="img">
                <img src="/images/teem1.png" alt="team-member" />
              </div>
              <h6>Amer Rajkhan</h6>
              <p>CEO</p>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="team-member" data-aos="fade-up">
              <div className="img">
                <img src="/images/teem2.png" alt="team-member" />
              </div>
              <h6>Aljohara Al-Mandil</h6>
              <p>Head of Digital Lab</p>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="team-member" data-aos="fade-up">
              <div className="img">
                <img src="/images/teem3.png" alt="team-member" />
              </div>
              <h6>Saeed Siddiki</h6>
              <p>Head of digital Insights</p>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="team-member" data-aos="fade-up">
              <div className="img">
                <img src="/images/teem4.png" alt="team-member" />
              </div>
              <h6>Abdullah Masfoh</h6>
              <p>Head of Digital Platform</p>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="team-member" data-aos="fade-up">
              <div className="img">
                <img src="/images/teem5.png" alt="team-member" />
              </div>
              <h6>Riad Hamoui</h6>
              <p>Head of Marketing</p>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="team-member" data-aos="fade-up">
              <div className="img">
                <img src="/images/teem6.png" alt="team-member" />
              </div>
              <h6>Ahmed Aledreessi</h6>
              <p>Head of Digital Factory</p>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
