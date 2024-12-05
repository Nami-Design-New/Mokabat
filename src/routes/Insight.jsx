import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useGetInsight from "../hooks/insights/useGetInsight";
import useGetInsights from "../hooks/insights/useGetInsights";

export default function Insight() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data: insights } = useGetInsights();
  const { data: insight } = useGetInsight(id);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "",
          text: "",
          url: window.location.href,
        })
        .catch((error) => ("Error sharing:", error));
    } else {
      alert("Your browser does not support the Web Share API");
    }
  };

  return (
    <section className="insight_page">
      <div className="details_top">
        <div className="img">
          <img src={insight?.image} alt={insight?.title} />
          <div className="content">
            <h3 data-aos="fade-up">{insight?.title}</h3>
            <div className="btns" data-aos="fade-up">
              <a href={insight?.file}  target="_blank" download={insight?.title}>
                {t("downloadFiles")}{" "}
                <i className="fa-regular fa-cloud-arrow-down"></i>
              </a>
              <button onClick={handleShare}>
                {t("shareInsight")} <i className="fa-solid fa-share"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <p data-aos="fade-up">
          <b>{insight?.subtitle}</b>
        </p>
        <p data-aos="fade-up">{insight?.description}</p>
        <div className="row">
          <div className="col-12 p-2">
            <h2 className="header" data-aos="fade-up">
              {t("read")} <span>{t("next")}</span>
            </h2>
          </div>
          {insights
            ?.filter((i) => i?.id !== +id)
            ?.map((insight) => (
              <div
                className="col-lg-4 col- md-6 col-12 p-2"
                data-aos="fade-up"
                key={insight?.id}
              >
                <Link to={`/insights/${insight?.id}`} className="insight_link">
                  <div className="img">
                    <img src={insight?.image} alt={insight?.title} />
                    <div className="content">
                      <h4>{insight?.title}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
