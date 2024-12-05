import { useRef, useState, useEffect } from "react";
import useGetAboutSlider from "../../hooks/about/useGetAboutSlider";

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);

  const { data: slider } = useGetAboutSlider();

  const handleTabClick = (index) => {
    setLastActiveIndex(activeIndex);
    setActiveIndex(index);
    const contentCards = sectionRef.current.querySelectorAll('.content-card');
    contentCards[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const handleContentClick = (index) => {
    setLastActiveIndex(activeIndex);
    setActiveIndex(index);
  };

  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setLastActiveIndex(activeIndex);
          setActiveIndex(index);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-20% 0px -20% 0px'
    });

    const contentCards = sectionRef.current.querySelectorAll('.content-card');
    contentCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="whyus_section" ref={sectionRef} >
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
                data-index={index}
                className={`content-card ${
                  activeIndex === index ? "active" : ""
                }`}
                style={{
                  opacity: activeIndex === index ? 1 : 
                          index === lastActiveIndex ? 0.8 : 0.5,
                  pointerEvents: "auto",
                  cursor: "pointer",
                  transition: "opacity 0.3s ease"
                }}
                onClick={() => handleContentClick(index)}
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
