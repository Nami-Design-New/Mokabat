import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useScramble } from "use-scramble";
import useGetHeroSection from "../../hooks/home/useGetHeroSection";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const { data: heroData } = useGetHeroSection();
  const isArabic = i18n.language === "ar";

  const [phrases, setPhrases] = useState([]);
  const [textIndex, setTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (heroData) {
      setPhrases(heroData?.words?.map((w) => w?.title));
    }
  }, [heroData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % phrases.length);
        setFadeIn(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  const { ref } = useScramble({
    text: isArabic ? "" : phrases[textIndex],
    speed: 0.5,
    tick: 2,
    step: 1,
    scramble: 8,
    seed: 0,
    ease: "easeInOutQuad",
  });

  return (
    <section className="home_section">
      <div className="pattern">
        <img src="/images/pattern.webp" alt="pattern" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-3">
            <div className="content">
              <h1>
                {heroData?.title}{" "}
                {isArabic ? (
                  <span
                    className={`fade-text ${fadeIn ? "fade-in" : "fade-out"}`}
                  >
                    {phrases[textIndex]}
                  </span>
                ) : (
                  <span ref={ref}></span>
                )}
              </h1>
              <h1>{heroData?.sub_title}</h1>
              <p>{heroData?.description}</p>
              <Link to="/about" className="customBtn">
                {t("learnMore")}{" "}
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-12 p-3">
            <div className="imgs_container">
              <img
                className="balls"
                src={heroData?.image_two}
                onLoad={() => (this.src = "/images/ball.webp")}
              />
              <img
                className="window"
                src={heroData?.image_three}
                onLoad={() => (this.src = "/images/squ.webp")}
              />
              <img
                className="astro"
                src={heroData?.image_one}
                onLoad={() => (this.src = "/images/astro.webp")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
