import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useGetFeedBack from "../../hooks/home/useGetFeedBack";

export default function Testimonials() {
  const { t } = useTranslation();
  const { data: feedbacks } = useGetFeedBack();
  return (
    <section className="testimonials_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-5">
            <div className="header" data-aos="fade-up">
              <h2>
                {t("yourFeedBack")} <span>{t("highlyValued")}</span>
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
          <div className="col-lg-7 col-12 p-2" data-aos="fade-up">
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
              {feedbacks?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="feedback_card">
                    <div className="rate">
                      {Array(item?.stars)
                        .fill(0)
                        .map((_, index) => (
                          <i className="fa-solid fa-star" key={index}></i>
                        ))}
                      {Array(5 - item?.stars)
                        .fill(0)
                        .map((_, index) => (
                          <i className="fa-solid fa-star uni" key={index}></i>
                        ))}
                    </div>
                    <p className="des">{item?.message}</p>
                    <div className="user">
                      <img src={item?.image} alt="" />
                      <div className="info">
                        <h4> {item?.name} </h4>
                        <h6> {item?.job_title} </h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-lg-5 col-12 p-2" data-aos="fade-up">
            <div className="call_wrapper">
              <span>{t("letsWorkTogether")}</span>
              <h4>{t("unleashYourPotential")}</h4>
              <Link to="/contact" className="customBtn">
                {t("getInTouch")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
