import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./ui/layout/Header";
import i18n from "./utils/i18n";
import ParticlesComponent from "./ui/ParticlesComponent";
import router from "./router";
import Footer from "./ui/layout/Footer";

function App() {
  const body = document.querySelector("body");
  const language = useSelector((state) => state.language.lang);
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem("lang", language);
    const body = document.querySelector("body");
    language === "ar" ? body.classList.add("ar") : body.classList.remove("ar");
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        body.classList.add("dark_theme");
      } else {
        body.classList.remove("dark_theme");
      }
    };

    if (location.pathname === "/") {
      body.classList.remove("dark_theme");
      body.classList.remove("not_index_page");
      window.addEventListener("scroll", handleScroll);
    } else {
      body.classList.add("not_index_page");
      body.classList.add("dark_theme");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [body.classList, location.pathname]);

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
