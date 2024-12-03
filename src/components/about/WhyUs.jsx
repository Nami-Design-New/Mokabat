import { useRef, useState, useEffect } from "react";
import useGetAboutSlider from "../../hooks/about/useGetAboutSlider";

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: slider } = useGetAboutSlider();

  useEffect(() => {
    const options = { root: null, threshold: 0.5, rootMargin: '0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
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

  const handleTabClick = (index) => {
    setActiveIndex(index);
    const contentCards = sectionRef.current.querySelectorAll('.content-card');
    contentCards[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <section className="whyus_section" ref={sectionRef} data-aos="fade-up">
      <div className="container">
        <div className="row tabs-row">
          <div className="tabs-wrapper col-3">
            <div className="tabs">
              {slider?.map((tab, index) => (
                <div
                  key={index}
                  className={`tab ${index === activeIndex ? "active" : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab?.title}
                </div>
              ))}
            </div>
          </div>
          <div className="tabs-content-wrapper col-6 py-2 px-4">
            {slider?.map((slide, index) => (
              <div
                key={index}
                className={`content-card ${
                  activeIndex === index ? "active" : ""
                }`}
                style={{
                  opacity: activeIndex === index ? 1 : 0.5, 
                  pointerEvents: activeIndex === index ? "auto" : "none",
                }}
              >
                <h2>{slide?.title}</h2>
                <p
                  className="des"
                  dangerouslySetInnerHTML={renderHTML(slide?.description)}
                ></p>
              </div>
            ))}
          </div>
          <div className="img-wrapper col-3">
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
