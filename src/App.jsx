import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./ui/layout/Header";
import i18n from "./utils/i18n";
import ParticlesComponent from "./ui/ParticlesComponent";
import router from "./router";
import Footer from "./ui/layout/Footer";
import IntroLoader from "./ui/loaders/IntroLoader";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const language = useSelector((state) => state.language.lang);
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    sessionStorage.setItem("lang", language);
    const body = document.querySelector("body");
    language === "ar" ? body.classList.add("ar") : body.classList.remove("ar");
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionDivs = section.querySelectorAll("[data-aos]");
      sectionDivs.forEach((div, index) => {
        div.setAttribute("data-aos-delay", (index + 1) * 100);
      });
    });

    AOS.init({
      offset: 20,
      delay: 50,
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => AOS.refresh(), 100);
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <video className="bg_video" src="/images/cubes.mp4" autoPlay loop muted playsInline></video> */}
      <IntroLoader className={showIntro ? "" : "hide"} />
      <ParticlesComponent />
      <Header />
      <main>
        <Routes>
          {router.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
