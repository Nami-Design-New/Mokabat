import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import "swiper/swiper-bundle.css";
import useGetTeam from "../../hooks/about/useGetTeam";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function OurTeam() {
  const { t } = useTranslation();
  const { data: team } = useGetTeam();
  const { lang } = useSelector((state) => state.language);

  return (
    <section className="our_team_section">
      <div className="container">
        <div className="header">
          <h2 data-aos="fade-up">{t("ourTeam")}</h2>
          <p data-aos="fade-up">{t("ourTeamDesc")}</p>
        </div>

        <Swiper
          speed={2000}
          loop={true}
          slidesPerView={5}
          spaceBetween={16}
          modules={[Autoplay]}
          className="about_swiper"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          data-aos="fade-up"
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
              slidesPerView: 1,
            },
          }}
        >
          {team?.map((employee) => (
            <SwiperSlide key={employee?.id}>
              <div className="team-member" data-aos="fade-up">
                <div className="img">
                  <img src={employee?.image} alt="team-member" />
                </div>
                <h6>{employee?.title}</h6>
                <p>{employee?.job_title}</p>
                <ul className="social-media">
                  <li>
                    {employee?.facebook && employee?.facebook !== "#" && (
                      <Link to={employee?.facebook} target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    )}
                  </li>
                  <li>
                    {employee?.instagram && employee?.instagram !== "#" && (
                      <Link to={employee?.instagram} target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    )}
                  </li>
                  <li>
                    {employee?.twitter && employee?.twitter !== "#" && (
                      <Link to={employee?.twitter} target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    )}
                  </li>
                  <li>
                    {employee?.linkedin && employee?.linkedin !== "#" && (
                      <Link to={employee?.linkedin} target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
