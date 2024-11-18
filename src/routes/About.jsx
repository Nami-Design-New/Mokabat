import { useTranslation } from "react-i18next";
import OurTeam from "../components/about/OurTeam";
import useGetAbout from "../hooks/about/useGetAbout";
import WhyUs from "./../components/about/WhyUs";

export default function About() {
  const { t } = useTranslation();
  const { data: about } = useGetAbout();
  return (
    <>
      <section className="about_page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12 p-2">
              <div className="content">
                <h1 data-aos="fade-up">{about?.title} </h1>
                <p data-aos="fade-up">{about?.description}</p>
                <a
                  data-aos="fade-up"
                  href={about?.file}
                  download
                  className="download_assets"
                >
                  {t("downloadBourchoure")}{" "}
                  <i className="fa-regular fa-cloud-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <OurTeam />
    </>
  );
}
