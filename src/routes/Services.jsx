import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useGetServices from "../hooks/services/useGetServices";

export default function Services() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: services } = useGetServices();
  const { lang } = useSelector((state) => state.language);

  const handleSlideChange = (index) => {
    if (swiperRef) {
      swiperRef.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <section className="services_page">
      <div className="container">
        <div className="slider_container">
          <Swiper
            speed={1000}
            slidesPerView={1}
            spaceBetween={16}
            modules={[Navigation]}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            dir={lang === "ar" ? "rtl" : "ltr"}
            key={lang}
            className="services_swiper"
            onSwiper={(swiper) => setSwiperRef(swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {services?.map((service) => (
              <SwiperSlide key={service?.id}>
                <div className="row justify-content-between">
                  <div className="col-lg-5 col-12 p-2">
                    <div className="img">
                      <img src={service?.image} alt={service?.title} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 p-2">
                    <div className="sercvice_content">
                      <h2>{service?.title}</h2>
                      <p>{service?.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="controls">
            <button className="prev">
              <i
                className={`fa-solid ${
                  lang === "ar" ? "fa-arrow-right" : "fa-arrow-left"
                }`}
              ></i>
            </button>
            <button className="next">
              <i
                className={`fa-solid ${
                  lang === "ar" ? "fa-arrow-left" : "fa-arrow-right"
                }`}
              ></i>
            </button>
          </div>
        </div>

        <div className="thumbs">
          {services?.map((service, index) => (
            <button
              key={service?.id}
              onClick={() => handleSlideChange(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {service?.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
