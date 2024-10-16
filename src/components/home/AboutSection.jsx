import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function AboutSection() {
  return (
    <section className="about_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h6 className="text-center">
              To be at the forefront of digital change in innovative products.
            </h6>
          </div>
          <div className="col-12 p-2">
            <Swiper
              speed={4000}
              loop={true}
              slidesPerView={3}
              spaceBetween={24}
              modules={[Autoplay]}
              className="about_swiper"
              autoplay={{ delay: 0, disableOnInteraction: false }}
              breakpoints={{
                992: {
                  slidesPerView: 3
                },
                768: {
                  slidesPerView: 2
                },
                350: {
                  slidesPerView: 1
                }
              }}
            >
              <SwiperSlide>
                <div className="about_card">
                  <div className="content">
                    <div className="icon">
                      <img src="/images/reliability.png" alt="" />
                    </div>
                    <h2>Reliability</h2>
                  </div>
                  <p>
                    We are proud of our solid capabilities and resources. We
                    have the know-how to deliver transformative solutions, and
                    we will continue doing so.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="about_card">
                  <div className="content">
                    <div className="icon">
                      <img src="/images/collaboration.png" alt="" />
                    </div>
                    <h2>Collaboration</h2>
                  </div>
                  <p>
                    We recognize that transformative progress thrives when
                    diverse minds unite. We forge strong partnerships and create
                    synergies internally, and externally.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="about_card">
                  <div className="content">
                    <div className="icon">
                      <img src="/images/innovation.png" alt="" />
                    </div>
                    <h2>Innovation</h2>
                  </div>
                  <p>
                    We embrace modern technology, embed state-of-the-art
                    solutions, and accelerate the birth of disruptive
                    innovations in the financial sector.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="about_card">
                  <div className="content">
                    <div className="icon">
                      <img src="/images/empowerment.png" alt="" />
                    </div>
                    <h2>Empowerment</h2>
                  </div>
                  <p>
                    We encourage our stakeholders to be achievers and authors of
                    their own stories.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="about_card">
                  <div className="content">
                    <div className="icon">
                      <img src="/images/aspiration.png" alt="" />
                    </div>
                    <h2>Aspiration</h2>
                  </div>
                  <p>
                    We empower our ambitions for tomorrow and embrace the future
                    through delivering enlightening insights.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
