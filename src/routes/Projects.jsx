import useGetProjects from "../hooks/projects/useGetProjects";
import useGetSettings from "../hooks/useGetSettings";

export default function Projects() {
  const { data: settings } = useGetSettings();
  const { data: projects } = useGetProjects();

  return (
    <section className="projects_page">
      <div className="container">
        <h1 data-aos="fade-up">
          {settings?.first_project_text}{" "}
          <span>{settings?.second_project_text}</span>
        </h1>
        <div className="projects">
          {projects?.map((project, index) => {
            if (index % 2 !== 0) {
              return (
                <div className="row" key={project.id}>
                  <div className="col-lg-6 col-12 p-2 order-lg-0 order-1">
                    <div className="img" data-aos="zoom-in-up">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 p-2 order-lg-1 order-0">
                    <div className="project_card">
                      <h3 className="title" data-aos="fade-up">
                        {project.title}
                      </h3>
                      <p className="subtitle" data-aos="fade-up">
                        {project.sub_title}
                      </p>
                      <p className="description" data-aos="fade-up">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="row" key={project.id}>
                  <div className="col-lg-6 col-12 p-2">
                    <div className="project_card">
                      <h3 className="title" data-aos="fade-up">
                        {project.title}
                      </h3>
                      <p className="subtitle" data-aos="fade-up">
                        {project.sub_title}
                      </p>
                      <p className="description" data-aos="fade-up">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 p-2">
                    <div className="img" data-aos="zoom-in-up">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
