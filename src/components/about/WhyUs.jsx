import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect, useRef } from "react";
import useGetAboutSlider from "./../../hooks/about/useGetAboutSlider";

export default function WhyUs() {
  return (
    <ParallaxProvider>
      <WhyUsContent />
    </ParallaxProvider>
  );
}

function WhyUsContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: slider } = useGetAboutSlider();
  const contentRefs = useRef([]);

  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const visibleIndex = contentRefs.current.findIndex((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top >= 150 && rect.top < window.innerHeight / 2;
      });

      if (visibleIndex !== -1 && visibleIndex !== activeIndex) {
        setActiveIndex(visibleIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    isScrollingRef.current = true;

    document.getElementById(`content-${index}`).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  const renderHTML = (html) => ({ __html: html });

  const getTransitionStyles = (index) => ({
    opacity: activeIndex === index ? 1 : 0.5,
    transform: `translateY(${activeIndex === index ? 0 : "20px"})`,
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  });

  return (
    <section className="whyus_section">
      <div className="container">
        <div className="row tabs-row">
          <div className="tabs-wrapper col-3" data-aos="fade-up">
            <div className="tabs">
              {slider?.map((tab, index) => (
                <div
                  key={index}
                  className={`tab ${index === activeIndex ? "active" : ""}`}
                  onClick={() => handleSelect(index)}
                  style={{
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {tab?.title}
                </div>
              ))}
            </div>
          </div>

          <div
            className="tabs-content-wrapper col-6 py-2 px-4"
            data-aos="fade-up"
          >
            {slider?.map((slide, index) => (
              <div
                id={`content-${index}`}
                key={index}
                ref={(el) => (contentRefs.current[index] = el)}
                className={`content-card ${
                  activeIndex === index ? "active" : ""
                }`}
                style={getTransitionStyles(index)}
              >
                <img className="responsiveImg" src={slide?.image} alt={slide?.title} />
                <h2>{slide?.title}</h2>
                <p
                  className="des"
                  dangerouslySetInnerHTML={renderHTML(slide?.description)}
                />
              </div>
            ))}
          </div>
          <div className="img-wrapper col-3" data-aos="fade-up">
            <div className="lazyImg">
              <img
                src={slider?.map((slide) => slide?.image)?.[activeIndex]}
                alt="our_aim"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
