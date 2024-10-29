import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SectionHeader from "../ui/layout/SectionHeader";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Services() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <SectionHeader />
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
            <SwiperSlide>
              <div className="row justify-content-between">
                <div className="col-lg-5 col-12 p-2">
                  <div className="img">
                    <img src="/images/digital-lab-new.webp" alt="lab" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <div className="sercvice_content">
                    <h2>Lab</h2>
                    <p>
                      In today's hyper "everything" business environment, the
                      norm is to ingest, aggregate, and push "insights &amp;
                      practices" to clients and ecosystems. We consistently
                      explore, design, articulate, and lead with pivotal
                      insights as well as devise future solutions.
                    </p>
                    <p>
                      We have an active in-house think tank enacting as a
                      "thought leader" derived from decades of "corporate
                      innovation" practices and beliefs.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-content-between">
                <div className="col-lg-5 col-12 p-2">
                  <div className="img">
                    <img src="/images/digital-studio.webp" alt="lab" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <div className="sercvice_content">
                    <h2>Studio</h2>
                    <p>
                      Once you are all set within our D. Lab, we start focusing
                      on where you need to take your business next. Our
                      architects, developers, and designers, with deep financial
                      services industry and cloud expertise, embed with your
                      team to understand your current environments and unique
                      challenges and goals.&nbsp;
                    </p>
                    <p>
                      We bring fresh perspectives and proven practices to
                      accelerate innovation and speed-to-value while your teams
                      learn through co-creation. As part of what we do, we
                      support you in defining your requirements, designing your
                      UX/UI, prototyping, and building your market strategy.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-content-between">
                <div className="col-lg-5 col-12 p-2">
                  <div className="img">
                    <img src="/images/digital-factory.webp" alt="lab" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <div className="sercvice_content">
                    <h2>Factory</h2>
                    <p>
                      Once your strategy and requirements are clear, we act as
                      your execution arm. We lead product development through
                      digital squads, owning end-to-end development of products,
                      including design, execution, and maintenance, in
                      collaboration with business units and business technology.
                    </p>
                    <p>
                      We are a delivery-oriented organization; our key
                      characteristics include:
                    </p>
                    <ul>
                      <li>
                        Enable BUs to build best-in-class digital products and
                        customer journeys.
                      </li>
                      <li>
                        Incubate new ways of working and future cultures in the
                        fintech sector.
                      </li>
                      <li>Work in squads with robust and agile governance.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-content-between">
                <div className="col-lg-5 col-12 p-2">
                  <div className="img">
                    <img src="/images/digital-platform-new.webp" alt="lab" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <div className="sercvice_content">
                    <h2>Platform</h2>
                    <p>
                      Even if you are not building from scratch, we create the
                      green field for you by providing fast-track
                      solutions.&nbsp;
                    </p>
                    <ul>
                      <li>
                        Develop standard restful API services such as Open
                        Banking and Open API services.
                      </li>
                      <li>
                        We are much ahead of implementing BaaS which plays a
                        vital role to support FinTech needs such as E-wallet as
                        a service and B2B as a service.
                      </li>
                      <li>
                        Our platforms offer BI engine that generates a dashboard
                        for visualization in addition to features such as fraud
                        management and alert system, training module, HOST
                        security module, managed services, and Recon &amp;
                        settle.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-content-between">
                <div className="col-lg-5 col-12 p-2">
                  <div className="img">
                    <img src="/images/digital-business.webp" alt="lab" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <div className="sercvice_content">
                    <h2>Business</h2>
                    <p>
                      Your product is ready, but it's impossible for you to be
                      successful without identifying your go-to market strategy.
                    </p>
                    <p>
                      We work on a clear and concise strategy to define and
                      communicate your company's unique selling points by
                      developing and honing an appropriate commercialization
                      strategy, which is highly dependent on building and
                      maintaining detailed and reliable business intelligence on
                      prospects, competitors, and market dynamics. We oversee
                      the communications, PR, and marketing strategy,
                      identifying partnership opportunities and outreach, and
                      building the company's reputation internally and
                      externally.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-content-between">
                <div className="col-lg-5 col-12 p-2">
                  <div className="img">
                    <img src="/images/digital-insight.webp" alt="lab" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <div className="sercvice_content">
                    <h2>Insights</h2>
                    <p>
                      In today's hyper "everything" business environment, the
                      norm is to ingest, aggregate, and push "insights &amp;
                      practices" to clients and ecosystems. We consistently
                      explore, design, articulate, and lead with pivotal
                      insights as well as devise future solutions.
                    </p>
                    <p>
                      We have an active in-house think tank enacting as a
                      "thought leader" derived from decades of "corporate
                      innovation" practices and beliefs.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
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
              watchSlidesProgress={true}
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
              {[
                "Lab",
                "Studio",
                "Factory",
                "Platform",
                "Business",
                "Insights",
              ].map((title, index) => (
                <SwiperSlide key={index}>
                  <button>{title}</button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
