import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import useGetServices from "../hooks/services/useGetServices";

export default function Services() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data: services } = useGetServices();

  return (
    <section className="services_page">
      <div className="container">
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView={1}
          spaceBetween={16}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="services_swiper"
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

        <div className="thumbs">
          <Swiper
            speed={1000}
            slidesPerView={6}
            spaceBetween={16}
            className="services_swiper"
            onSwiper={setThumbsSwiper}
            loop={true}
            freeMode={true}
            centeredSlides={true}
            modules={[FreeMode, Navigation, Thumbs]}
            breakpoints={{
              992: {
                slidesPerView: 6,
              },
              768: {
                slidesPerView: 5,
              },
              350: {
                slidesPerView: 3,
              },
            }}
          >
            {services?.map((service, index) => (
              <SwiperSlide key={index}>
                <button>{service?.title}</button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
