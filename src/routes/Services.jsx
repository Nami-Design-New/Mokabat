import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionHeader from "../ui/layout/SectionHeader";

export default function Services() {
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
            modules={[Navigation]}
            className="services_swiper"
            autoplay={{ delay: 1000, disableOnInteraction: false }}
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
              <div className="row">
                <div className="col-lg-5 col-12 p-2">
                  <div className="img">
                    <img src="/images/digital-lab-new.webp" alt="lab" />
                  </div>
                </div>
                <div className="col-lg-7 col-12 p-2">
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
          </Swiper>
        </div>
      </section>
    </>
  );
}
