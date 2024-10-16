import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useScramble } from "use-scramble";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [textIndex, setTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const phrases = [t("mokabat"), t("aiItSoloutions")];

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
                {t("weAre")}{" "}
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
              <h1>{t("turnsIdeas")}</h1>
              <p>{t("mokabatDesc")}</p>
              <Link to="/about" className="customBtn">
                {t("learnMore")}{" "}
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-3">
            <div className="imgs_container">
              <img className="balls" src="/images/ball.webp" alt="" />
              <img className="window" src="/images/squ.webp" alt="" />
              <img className="astro" src="/images/astro.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
