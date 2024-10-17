import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Testimonials() {
  return (
    <section className="testimonials_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-5">
            <div className="header">
              <h2>
                Your feedback is <span>highly valued</span>
              </h2>
              <div className="swiper_navigation">
                <button className="testimonials-swiper-prev">
                  <i className="fa-light fa-chevron-left"></i>
                </button>
                <button className="testimonials-swiper-next">
                  <i className="fa-light fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 p-2">
            <Swiper
              speed={1000}
              loop={true}
              slidesPerView={1}
              spaceBetween={12}
              modules={[Navigation]}
              className="testimonials_swiper"
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              navigation={{
                prevEl: ".testimonials-swiper-prev",
                nextEl: ".testimonials-swiper-next",
              }}
            >
              <SwiperSlide>
                <div className="feedback_card">
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="des">
                    Efigence&apos;s mission is to transform the world through
                    exceptional customer service via innovative products and
                    services. Thanks to our partnership with Jeel, we&apos;ve
                    delivered significant value in the Kingdom and across the
                    Middle East. Jeel&apos;s efficient and creative approach
                    underpins our success and customer satisfaction. Their
                    diverse expertise ensures tailored service for every
                    customer, overcoming challenges with a shared commitment to
                    results. Jeel is our trusted partner, delivering the
                    competitive edge our customers deserve.
                  </p>
                  <div className="user">
                    <img src="/images/1.jpg" alt="" />
                    <div className="info">
                      <h4> Karl abbott </h4>
                      <h6> Member, Supervisory Board | Efigence </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="feedback_card">
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="des">
                    I&apos;m writing to express deep gratitude to Jeel for their
                    exceptional support during Riyad Bank&apos;s open banking
                    implementation. Over the past year, Jeel consistently
                    exceeded expectations. They are highly responsive to
                    business needs, possess extensive API industry expertise,
                    and ensure timely project completion. mokabats&apos;s
                    flexibility and dedication make them the ideal choice for
                    financial institutions seeking a reliable technical service
                    provider.
                  </p>
                  <div className="user">
                    <img src="/images/1.jpg" alt="" />
                    <div className="info">
                      <h4> Sultan AlBayhani </h4>
                      <h6>
                        Open Banking Business Development Manager | Riyad Bank
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="feedback_card">
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="des">
                    As a Corporate representative PO collaborating with Jeel on
                    digitizing our relationship management journey (RMWB), my
                    experience was defined by two key factors: Tailored
                    Solutions: Jeel comprehended our division&apos;s unique
                    needs and collaboratively developed a customized product
                    that aligned perfectly with our relationship management
                    goals, contributing significantly to our project&apos;s
                    success.
                  </p>
                  <div className="user">
                    <img src="/images/1.jpg" alt="" />
                    <div className="info">
                      <h4> Fahad Assaf Al-Assali </h4>
                      <h6> Product Owner | Riyad Bank </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="feedback_card">
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="des">
                    Partnering with Jeel has been a transformative journey
                    marked by their innovative solutions, dedication to
                    excellence, and open communication. Their integration of
                    cutting-edge tech and embrace of unconventional ideas led to
                    remarkable outcomes. Jeel&apos;s commitment to quality and
                    problem-solving, along with their understanding of our
                    unique needs, ensured efficient project delivery. If you
                    seek a partner that challenges the status quo and turns
                    ideas into reality, I wholeheartedly recommend Jeel for
                    their innovative spirit and dedication to excellence.
                  </p>
                  <div className="user">
                    <img src="/images/1.jpg" alt="" />
                    <div className="info">
                      <h4> Ashwani Gupta </h4>
                      <h6> Director, Engagement & Delivery | Nagarro </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-lg-5 col-12 p-2">
            <div className="call_wrapper">
              <span>Let&apos;s work together</span>
              <h4>Unleash Your Digital Potential.</h4>
              <Link to="/contact" className="customBtn">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
