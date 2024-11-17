import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useGetActions from "../../hooks/home/useGetActions";

export default function Actions() {
  const { t } = useTranslation();
  const { data: actions } = useGetActions();

  return (
    <section className="actions_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2 mb-4">
            <div className="header">
              <h2 data-aos="fade-up">{t("actions")}</h2>
              <p data-aos="fade-up">{t("actionsDescription")}</p>
            </div>
          </div>
          {actions?.map((action) => (
            <div className="col-lg-5 col-12 p-3" key={action.id}>
              <div className="program_card" data-aos="fade-up">
                <img src={action?.image} alt="" />
                <Link to={`/programs/${action?.id}`} className="program_link">
                  <h6>{action?.title}</h6>
                  <div className="hiddenText">
                    <p>{action?.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
