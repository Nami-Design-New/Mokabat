import { useEffect, useState, useRef } from "react";
import lozad from "lozad";
import SimpleParallax from "simple-parallax-js";
import CountUp from "react-countup";

export default function WhyUs() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = lozad(".lazy", {
      loaded: function (el) {
        el.parentNode.classList.add("loaded");
      },
    });
    observer.observe();

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      intersectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        intersectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="whyus_section" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="lazyImg">
              <div className="lazyDiv">
                <div className="lazy">
                  <SimpleParallax speed={0.5} scale={1.2}>
                    <img src="/images/about1.jpg" alt="our_aim" />
                  </SimpleParallax>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="info">
              <h2 className="aboutTitle">
                Our <span>Aims</span>
              </h2>
              <p className="des">
                Our aim is to innovatively address the rapid technological
                advancements disrupting industries and societies.
              </p>

              <h2 className="aboutTitle">
                <span>How ?</span>
              </h2>
              <p className="des">
                By embodying the latest financial technologies and solutions and
                nurturing a thriving ecosystem where the industry’s talents can
                flourish. With a strong will, vision, and the right tools, we
                want to transform people’s dreams into reality and create a
                better tomorrow.
              </p>

              <div className="statistic">
                <h1 className="counterUp">
                  {startCount && <CountUp duration={5} start={0} end={10} />}+
                </h1>
                <h6>Years of Experience</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-12 p-2 order-lg-0 order-1">
            <div className="info">
              <h2 className="aboutTitle">
                Our <span>Vision</span>
              </h2>
              <p className="des">
                To be at the forefront of the digital revolution in financial
                technologies and innovative solutions.
              </p>

              <h2 className="aboutTitle">
                Our <span>Mission</span>
              </h2>
              <p className="des">
                To enable the right environment for tomorrow’s financial
                technologies aspirers through incubation, acceleration, and
                partnerships, and leveraging world-class execution capabilities
                to guide digital products from ideation to execution and
                scale-up.
              </p>

              <div className="statistic">
                <h1 className="counterUp">
                  {startCount && <CountUp duration={5} start={0} end={150} />}+
                </h1>
                <h6>Project Completed</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2 order-lg-1 order-0">
            <div className="lazyImg">
              <div className="lazyDiv">
                <div className="lazy">
                  <SimpleParallax speed={0.5} scale={1.2}>
                    <img src="/images/img_59.jpg" alt="our_aim" />
                  </SimpleParallax>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="lazyImg">
              <div className="lazyDiv">
                <div className="lazy">
                  <SimpleParallax speed={0.5} scale={1.2}>
                    <img src="/images/img_63.jpg" alt="our_aim" />
                  </SimpleParallax>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="info">
              <h2 className="aboutTitle">
                why <span>Mokabat ?</span>
              </h2>
              <p className="des">
                Whether you are a fintech, a government entity, a smart city, or
                any other business, joining Jeel provides you with immense
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
        </div>
      </div>
    </section>
  );
}
