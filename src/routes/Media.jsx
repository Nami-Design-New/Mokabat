import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import useGetMediaSlider from "../hooks/media/useGetMediaSlider";
import useGetMedia from "../hooks/media/useGetMedia";

export default function Media() {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);
  const { data: slider } = useGetMediaSlider();
  const { data: mediaBlogs } = useGetMedia();

  return (
    <>
      <section className="media_swiper">
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
            clickable: true,
          }}
          className="media_swiper"
        >
          {slider?.map((slide) => (
            <SwiperSlide key={slide?.id}>
              <div className="img">
                <img src={slide?.image} alt={slide?.title} />
                <div className="content">
                  <div className="media_card">
                    <h2>{slide?.title}</h2>
                    <p>{slide?.description}</p>
                    <a
                      href={slide?.file}
                      target="_blank"
                      download={slide?.title}
                    >
                      {t("downloadFiles")}{" "}
                      <i className="fa-regular fa-cloud-arrow-down"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="media_page">
        <div className="container">
          <div className="row">
            {mediaBlogs?.map((blog) => (
              <div className="col-lg-4 col-md-6 col-12 p-2" key={blog?.id}>
                <Link
                  to={`/media/${blog?.id}`}
                  className="blog_card"
                  data-aos="fade-up"
                >
                  <div className="img">
                    <img src={blog?.image} alt="blog" />
                  </div>
                  <div className="content">
                    <h4>{blog?.title}</h4>
                    <div className="foo">
                      <span>
                        <i className="fa-regular fa-calendar"></i> {blog?.date}
                      </span>
                      <span className="link">
                        <img src="/images/arrow.svg" alt="arrow" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
