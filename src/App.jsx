import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./ui/layout/Header";
import i18n from "./utils/i18n";
import ParticlesComponent from "./ui/ParticlesComponent";
import router from "./router";
import Footer from "./ui/layout/Footer";

function App() {
  const language = useSelector((state) => state.language.lang);

  useEffect(() => {
    sessionStorage.setItem("lang", language);
    const body = document.querySelector("body");
    language === "ar" ? body.classList.add("ar") : body.classList.remove("ar");
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      const body = document.querySelector("body");

      if (window.scrollY > 600) {
        body.classList.add("dark_theme");
      } else {
        body.classList.remove("dark_theme");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ParticlesComponent />
      <Header />
      <main>
        <Routes>
          {router.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
