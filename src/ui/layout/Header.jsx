import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { setLanguage } from "../../redux/slices/language";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Header() {
  const header = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [closing, setClosing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        header.current.classList.add("active");
      } else {
        header.current.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLang = (newLang) => {
    dispatch(setLanguage(newLang));
    i18next.changeLanguage(newLang);
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.toggle("ar", newLang === "ar");
    }
  };

  const handleCloseMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setShowMenu(false);
      setClosing(false);
    }, 300);
  };

  return (
    <header ref={header}>
      <nav className="container">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="" />
        </Link>

        <ul
          className={`nav_links ${showMenu ? "active" : ""} ${
            closing ? "closing" : ""
          }`}
          ref={menuRef}
        >
          <li className="nav_link hide_lg">
            <NavLink to="/">
              <img src="/images/logo.svg" alt="logo" />
            </NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/">{t("home")}</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/about">{t("about")}</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/services">{t("services")}</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/media">{t("media")}</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/insights">{t("insights")}</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/projects">{t("projects")}</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/about">{t("contact")}</NavLink>
          </li>
          <button className="menu_btn" onClick={handleCloseMenu}>
            <i className="fa-regular fa-x"></i>
          </button>
        </ul>

        <div className="actions">
          <Link to="/" className="customBtn">
            {t("joinMokabat")}
          </Link>

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <i className="fa-sharp fa-solid fa-globe"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="menu">
              <div className="inner_menu">
                <button onClick={() => handleLang("en")}>
                  <img src="/images/Flag_of_the_United_States.svg" alt="usa" />{" "}
                  English
                </button>
                <button onClick={() => handleLang("ar")}>
                  <img src="/images/Flag_of_Saudi_Arabia.svg" alt="sa" />{" "}
                  العربية
                </button>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <button
            ref={toggleRef}
            className="menu_btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
