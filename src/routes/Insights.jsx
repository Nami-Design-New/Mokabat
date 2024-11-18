import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import useGetInsights from "../hooks/insights/useGetInsights";

export default function Insights() {
  const { data: insights } = useGetInsights();
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);

  return (
    <section className="insights_page">
      <div className="container" data-aos="fade-up">
        <Swiper
          speed={1000}
          loop={true}
          slidesPerView={1}
          spaceBetween={16}
          modules={[Pagination]}
          dir={lang === "ar" ? "rtl" : "ltr"}
          rtl={lang === "ar"}
          key={lang}
          pagination={{
            el: ".sw_pagiantion",
            clickable: true,
          }}
          className="insights_swiper"
        >
          {insights?.map((insight) => (
            <SwiperSlide key={insight?.id}>
              <div className="img">
                <img src={insight?.image} alt={insight?.title} />
                <div className="content">
                  <h2>{t("insights")}</h2>
                  <h4>{insight?.title}</h4>
                  <p>
                    <strong>{insight?.subtitle}</strong>
                  </p>
                  <p>{insight?.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="sw_pagiantion"></div>
        <div className="row mt-5">
          {insights?.map((insight) => (
            <div
              className="col-lg-3 col- md-6 col-12 p-2"
              data-aos="fade-up"
              key={insight}
            >
              <Link to={`/insights/${insight?.id}`} className="insight_link">
                <div className="img">
                  <img src={insight?.image} alt={insight?.title} />
                  <div className="content">
                    <h4>{insight?.title}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
