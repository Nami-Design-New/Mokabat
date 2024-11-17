import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useGetServices from "../../hooks/services/useGetServices";

export default function Services() {
  const [images, setImages] = useState([]);
  const [activeKey, setActiveKey] = useState("0");
  const [isFading, setIsFading] = useState(false);
  const { data: services } = useGetServices();
  const { t } = useTranslation();

  useEffect(() => {
    if (services) {
      const images = services.map((service) => service.image);
      setImages(images);
    }
  }, [services]);

  const handleSelect = (key) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveKey(key);
      setIsFading(false);
    }, 300);
  };

  return (
    <section className="services_section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12 p-2 mb-5">
            <div className="header">
              <h2 data-aos="fade-up">
                {t("ourServices")} <span>{t("techFuture")}</span>
              </h2>
              <p data-aos="fade-up">{t("servicesSub")}</p>
            </div>
          </div>

          <div className="col-lg-5 col-12 p-2" data-aos="zoom-in-up">
            <div className="aboutImage">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Service Image"
                  className={
                    parseInt(activeKey) === index
                      ? isFading
                        ? "fade-out"
                        : "fade-in"
                      : ""
                  }
                />
              ))}
            </div>
          </div>

          <div className="col-lg-7 col-12 p-2" data-aos="fade-up">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              {services?.map((service, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className={activeKey === index.toString() ? "active" : ""}
                >
                  <Accordion.Header>
                    {index + 1 < 10 ? 0 : ""}
                    {index + 1} &nbsp; &nbsp; {service.title}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{service.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
