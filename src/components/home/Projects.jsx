import { useTranslation } from "react-i18next";
import useGetProjects from "../../hooks/projects/useGetProjects";

export default function Projects() {
  const { t } = useTranslation();
  const { data: projects } = useGetProjects();

  return (
    <section className="pros_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h2 className="header_title" data-aos="fade-up">
              {t("mokabatExperience")} <span>{t("drivingInnovation")}</span>
            </h2>
          </div>

          <div className="col-lg-6 col-12 p-2 d-flex flex-column gap-5">
            {projects?.map((project, index) => {
              if ((index + 1) % 2 !== 0) {
                return (
                  <div
                    className="project_cardd small"
                    data-aos="zoom-in-up"
                    key={project.id}
                  >
                    <div className="img">
                      <img src={project.image} alt="home" />
                    </div>
                    <div className="content">
                      <h3 className="title">{project?.title}</h3>
                      <p>{project?.description}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="col-lg-6 col-12 p-2 d-flex flex-column gap-5">
            {projects?.map((project, index) => {
              if ((index + 1) % 2 === 0) {
                return (
                  <div
                    className="project_cardd"
                    data-aos="zoom-in-up"
                    key={project.id}
                  >
                    <div className="img">
                      <img src={project.image} alt="home" />
                    </div>
                    <div className="content">
                      <h3 className="title">{project?.title}</h3>
                      <p>{project?.description}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
