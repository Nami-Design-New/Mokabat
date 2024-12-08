import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import "swiper/swiper-bundle.css";
import useGetAboutMokabat from "../../hooks/home/useGetAboutMokabat";
import useGetSettings from "./../../hooks/useGetSettings";

export default function AboutSection() {
  const { lang } = useSelector((state) => state.language);
  const { data: aboutData } = useGetAboutMokabat();
  const { data: settings } = useGetSettings();

  return (
    <section className="about_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h2 className="text-center" data-aos="fade-up">
              {settings?.about_mokabat_title}
            </h2>
            <h6 className="text-center" data-aos="fade-up">
              {settings?.about_mokabat_desc}
            </h6>
          </div>
          <div className="col-12 p-2" data-aos="fade-up">
            <Swiper
              speed={10000}
              loop={true}
              slidesPerView={3}
              spaceBetween={24}
              modules={[Autoplay]}
              className="about_swiper"
              autoplay={{ delay: 0, disableOnInteraction: false }}
              dir={lang === "ar" ? "rtl" : "ltr"}
              rtl={lang === "ar"}
              key={lang}
              breakpoints={{
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                350: {
                  slidesPerView: 1,
                },
              }}
            >
              {aboutData?.map((slide) => (
                <SwiperSlide key={slide?.id}>
                  <div className="about_card">
                    <div className="content">
                      <div className="icon">
                        <img src={slide?.image} alt={slide?.title} />
                      </div>
                      <h2>{slide?.title}</h2>
                    </div>
                    <p>{slide?.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
