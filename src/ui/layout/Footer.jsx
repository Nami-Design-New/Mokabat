import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useGetSettings from "../../hooks/useGetSettings";
import axiosInstance from "../../utils/axiosInstance";

export default function Footer() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/subscribe", {
        email: email,
      });
      if (res.data?.code === 200) {
        toast.success(t("subscried"));
        setEmail("");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-4">
            <div className="news_letter">
              <p>
                {t("subscribeIn")} <span>{t("newsletter")}</span>
              </p>
              <h3>{t("reciveUpdates")}</h3>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder={t("enterEmail")}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  style={{
                    opacity: loading ? 0.7 : 1,
                    pointerEvents: loading ? "none" : "auto",
                  }}
                >
                  {loading ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    t("subscribe")
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <Link to="/" className="logo">
              <img src={settings?.logo_footer} alt="logo" />
              <span></span>
              <img src={settings?.second_logo_footer} alt="vision" />
            </Link>
            <div className="social_media">
              {settings?.facebook && settings?.facebook !== "#" && (
                <Link to={settings?.facebook} target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              )}

              {settings?.twitter && settings?.twitter !== "#" && (
                <Link to={settings?.twitter} target="_blank">
                  <i className="fab fa-twitter"></i>
                </Link>
              )}

              {settings?.linkedin && settings?.linkedin !== "#" && (
                <Link to={settings?.linkedin} target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              )}

              {settings?.youtube && settings?.youtube !== "#" && (
                <Link to={settings?.youtube} target="_blank">
                  <i className="fab fa-youtube"></i>
                </Link>
              )}

              {settings?.instagram && settings?.instagram !== "#" && (
                <Link to={settings?.instagram} target="_blank">
                  <i className="fab fa-instagram"></i>
                </Link>
              )}
            </div>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <h2 className="footer_title">{t("importantLinks")}</h2>
            <ul className="footer_links">
              <li>
                <Link className="footer_link" to="/about">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/services">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/programs">
                  {t("actions")}
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/projects">
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/media">
                  {t("media")}
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/join-mokabat">
                  {t("careers")}
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/contact">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <h2 className="footer_title">{t("contactInfo")}</h2>
            <Link
              target="_blank"
              rel="noreferrer"
              className="footer_link"
              to={settings?.location_link}
            >
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span>{settings?.location}</span>
            </Link>
            <Link to={`mailto:${settings?.email}`} className="footer_link">
              <i className="fas fa-envelope"></i> <span>{settings?.email}</span>
            </Link>
            <Link to={`tel:${settings?.phone}`} className="footer_link">
              <i className="fas fa-phone"></i> <span>{settings?.phone}</span>
            </Link>
          </div>

          <div className="col-12 p-2">
            <div className="copy_rights">
              <h6>
                <span>&copy; {new Date().getFullYear()}. </span>{" "}
                {t("allRights")} <Link to="/">{settings?.website_name}</Link>
              </h6>
              <div className="links">
                <Link to="terms-conditions">{t("termsAndConditions")}</Link>
                <Link to="privacy-policy">{t("privacyPloicy")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
