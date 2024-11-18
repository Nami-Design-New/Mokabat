import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useGetSettings from "../hooks/useGetSettings";
import axiosInstance from "../utils/axiosInstance";

export default function Contact() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function highlight(e) {
    e.target.previousElementSibling.classList.add("h");
  }

  function dehighlight(e) {
    if (e.target.value === "") {
      e.target.previousElementSibling.classList.remove("h");
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/contact-us", form);
      if (res.data?.code === 200) {
        toast.success(t("messageSent"));
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <div className="contact_info">
                <span data-aos="fade-up">{t("getInTouch")}</span>
                <h1 data-aos="fade-up">{settings?.contact_text}</h1>
                <div className="blocks">
                  <div className="block" data-aos="fade-up">
                    <h6>{t("callCenter")}</h6>
                    <Link to={`tel:${settings?.phone}`}>{settings?.phone}</Link>
                    <Link to={`tel:${settings?.other_phone}`}>
                      {settings?.other_phone}
                    </Link>
                  </div>
                  <div className="block" data-aos="fade-up">
                    <h6>{t("ourLocation")}</h6>
                    <Link to={settings?.location_link} target="_blank">
                      {settings?.location}
                    </Link>
                  </div>
                  <div className="block" data-aos="fade-up">
                    <h6>{t("emailAddress")}</h6>
                    <Link to={`mailto:${settings?.email}`}>
                      {settings?.email}
                    </Link>
                  </div>
                  <div className="block" data-aos="fade-up">
                    <h6>{t("followUsContact")}</h6>
                    <div className="socials">
                      <Link to={settings?.facebook}>
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link to={settings?.twitter}>
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link to={settings?.linkedin}>
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link to={settings?.instagram}>
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link to={settings?.youtube}>
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="contact_form" data-aos="fade-up">
                <form autoComplete="off" onSubmit={handleSendMessage}>
                  <div className="inputfield">
                    <label htmlFor="name">{t("fullName")}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    <span className="highlight"></span>
                  </div>

                  <div className="inputfield">
                    <label htmlFor="email">{t("emailAddress")}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                    <span className="highlight"></span>
                  </div>

                  <div className="inputfield">
                    <label htmlFor="subject">{t("subject")}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                    />
                    <span className="highlight"></span>
                  </div>

                  <div className="inputfield">
                    <label htmlFor="message" className="message-label">
                      {t("message")}
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                    <span className="highlight"></span>
                  </div>

                  <button
                    type="submit"
                    style={{
                      opacity: loading ? 0.7 : 1,
                      PointerEvent: loading ? "none" : "auto",
                    }}
                  >
                    {loading ? (
                      <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                      <>
                        <span>
                          <i className="fa-regular fa-angle-right"></i>
                        </span>{" "}
                        {t("send")}
                        <span>
                          <i className="fa-regular fa-angle-right"></i>
                        </span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map_section" data-aos="zoom-in-up">
        <div className="container">
          <div className="col-12 p-2">
            <iframe
              src={settings?.map_link}
              allowfullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
