import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import useGetLinkedinFeed from "../../hooks/home/useGetLinkedinFeed";

export default function LinkedInFeed() {
  const { lang } = useSelector((state) => state.language);
  const { t } = useTranslation();
  const { data: feed } = useGetLinkedinFeed();

  return (
    <section className="linkedin_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-5">
            <div className="header" data-aos="fade-up">
              <h2>
                {lang === "ar" ? (
                  <>
                    {t("feed")} <span>{t("linkedin")}</span>
                  </>
                ) : (
                  <>
                    {t("linkedin")} <span>{t("feed")}</span>
                  </>
                )}
              </h2>
              <a
                href="https://www.linkedin.com/in/mokabat/"
                target="_blank"
                rel="noreferrer"
              >
                {t("followUs")}
              </a>
            </div>
          </div>
          <div className="col-lg-12 p-2" data-aos="fade-up">
            <Swiper
              speed={4000}
              loop={true}
              slidesPerView={5}
              spaceBetween={24}
              modules={[Autoplay]}
              className="linkedin_swiper"
              autoplay={{ delay: 0, disableOnInteraction: true }}
              dir={lang === "ar" ? "rtl" : "ltr"}
              rtl={lang === "ar"}
              key={lang}
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
              {feed?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="feed">
                    {item?.type !== "video" ? (
                      <img src={item?.file} alt={item?.link} />
                    ) : (
                      <video src={item?.file} autoPlay loop muted playsInline />
                    )}
                    <div className="link">
                      <a href={item?.link} target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
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
