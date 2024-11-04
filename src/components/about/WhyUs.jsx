import { useRef, useState, useEffect } from "react";

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const options = { root: null, threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveIndex(parseInt(entry.target.dataset.index));
        }
      });
    }, options);

    const contentCards = sectionRef.current.querySelectorAll(".content-card");
    contentCards.forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => {
      contentCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="whyus_section" ref={sectionRef} data-aos="fade-up">
      <div className="container">
        <div className="row tabs-row">
          <div className="tabs-wrapper col-3">
            <div className="tabs">
              {[
                "Our Aims",
                "How ?",
                "Our Vision",
                "Our Mission",
                "Why Mokabat ?",
              ].map((tab, index) => (
                <div
                  key={index}
                  className={`tab ${index === activeIndex ? "active" : ""}`}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
          <div className="tabs-content-wrapper col-6 py-2 px-4">
            <div
              className={`content-card ${activeIndex === 0 ? "active" : ""}`}
            >
              <h2>
                Our <span>Aims</span>
              </h2>
              <p className="des">
                Our aim is to innovatively address the rapid technological
                advancements disrupting industries and societies.
              </p>
            </div>
            <div
              className={`content-card ${activeIndex === 1 ? "active" : ""}`}
            >
              <h2>
                <span>How ?</span>
              </h2>
              <p className="des">
                By embodying the latest financial technologies and solutions and
                nurturing a thriving ecosystem where the industry’s talents can
                flourish.
              </p>
            </div>
            <div
              className={`content-card ${activeIndex === 2 ? "active" : ""}`}
            >
              <h2>
                Our <span>Vision</span>
              </h2>
              <p className="des">
                To be at the forefront of the digital revolution in financial
                technologies and innovative solutions.
              </p>
            </div>
            <div
              className={`content-card ${activeIndex === 3 ? "active" : ""}`}
            >
              <h2>
                Our <span>Mission</span>
              </h2>
              <p className="des">
                To enable the right environment for tomorrow’s financial
                technologies aspirers through incubation, acceleration, and
                partnerships.
              </p>
            </div>
            <div
              className={`content-card ${activeIndex === 4 ? "active" : ""}`}
            >
              <h2>
                Why <span>Mokabat ?</span>
              </h2>
              <p className="des">
                Whether you are a fintech, a government entity, a smart city, or
                any other business, joining mokabat provides you with immense
                value.
              </p>
              <ul>
                <li>
                  <img src="/images/transform.svg" alt="" />
                  <h6>
                    Transforming your company into a digital-Led organization
                  </h6>
                </li>
                <li>
                  <img src="/images/partenerShip.svg" alt="" />
                  <h6>Exploring impactful partnerships</h6>
                </li>
                <li>
                  <img src="/images/innovation.png" alt="" />
                  <h6>
                    Diving into innovative frameworks to experiment and scale-up
                  </h6>
                </li>
                <li>
                  <img src="/images/brain.svg" alt="" />
                  <h6>Becoming digitally mature</h6>
                </li>
                <li>
                  <img src="/images/support.svg" alt="" />
                  <h6>
                    Finding the right support to be at the forefront of
                    disruption
                  </h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="img-wrapper col-3">
            <div className="lazyImg">
              <img
                src={`${
                  activeIndex === 0 || activeIndex === 1
                    ? "/images/about1.jpg"
                    : activeIndex === 2 || activeIndex === 3
                    ? "/images/img_59.jpg"
                    : "/images/img_63.jpg"
                }`}
                alt="our_aim"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
