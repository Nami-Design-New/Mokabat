import { Fragment, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { setLanguage } from "../../redux/slices/language";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import useGetSettings from "../../hooks/useGetSettings";
import useGetActions from "../../hooks/actions/useGetActions";
import useGetApperance from "./../../hooks/useGetApperance";

export default function Header() {
  const header = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [closing, setClosing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);

  const { data: settings } = useGetSettings();
  const { data: actions } = useGetActions();
  const { data: appearances } = useGetApperance();

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
    setShowLangDropdown(false);
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

  const handleActionClick = () => {
    setShowActionsDropdown(false);
    handleCloseMenu();
  };

  return (
    <header ref={header}>
      <nav className="container">
        <Link to="/" className="logo">
          <img src={settings?.logo_header} alt="" />
        </Link>

        <ul
          className={`nav_links ${showMenu ? "active" : ""} ${
            closing ? "closing" : ""
          }`}
          ref={menuRef}
        >
          <li className="nav_link hide_lg">
            <NavLink to="/">
              <img src={settings?.logo_header} alt="logo" />
            </NavLink>
          </li>
          <li className="nav_link" onClick={handleCloseMenu}>
            <NavLink to="/">{t("home")}</NavLink>
          </li>
          {appearances?.about_us_page !== "off" && (
            <li className="nav_link" onClick={handleCloseMenu}>
              <NavLink to="/about">{t("about")}</NavLink>
            </li>
          )}
          {appearances?.service_page !== "off" && (
            <li className="nav_link" onClick={handleCloseMenu}>
              <NavLink to="/services">{t("services")}</NavLink>
            </li>
          )}
          {appearances?.media_page !== "off" && (
            <li className="nav_link" onClick={handleCloseMenu}>
              <NavLink to="/media">{t("media")}</NavLink>
            </li>
          )}
          {appearances?.insights_page !== "off" && (
            <li className="nav_link" onClick={handleCloseMenu}>
              <NavLink to="/insights">{t("insights")}</NavLink>
            </li>
          )}
          {appearances?.projects_page !== "off" && (
            <li className="nav_link" onClick={handleCloseMenu}>
              <NavLink to="/projects">{t("projects")}</NavLink>
            </li>
          )}
          {appearances?.action_page !== "off" && (
            <li className="nav_link">
              <Dropdown
                show={showActionsDropdown}
                onToggle={(isOpen) => setShowActionsDropdown(isOpen)}
              >
                <Dropdown.Toggle id="dropdown-basic">
                  {t("actions")} <i className="fa-regular fa-angle-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="menu">
                  <div className="inner_menu">
                    {actions?.map((action) => (
                      <Fragment key={action}>
                        <NavLink
                          to={`/actions/${action?.id}`}
                          onClick={handleActionClick}
                        >
                          {action?.title}
                        </NavLink>
                      </Fragment>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          )}
          {appearances?.contact_us_page !== "off" && (
            <li className="nav_link" onClick={handleCloseMenu}>
              <NavLink to="/contact">{t("contact")}</NavLink>
            </li>
          )}
          {appearances?.careers_page !== "off" && (
            <li className="nav_link hide_lg" onClick={handleCloseMenu}>
              <NavLink to="/join-mokabat">{t("joinMokabat")}</NavLink>
            </li>
          )}
          <button className="menu_btn" onClick={handleCloseMenu}>
            <i className="fa-regular fa-x"></i>
          </button>
        </ul>

        <div className="actions">
          {appearances?.careers_page !== "off" && (
            <Link to="/join-mokabat" className="customBtn">
              {t("joinMokabat")}
            </Link>
          )}

          <Dropdown
            show={showLangDropdown}
            onToggle={(isOpen) => setShowLangDropdown(isOpen)}
          >
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
