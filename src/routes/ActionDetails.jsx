import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useGetProgram from "../hooks/actions/useGetProgram";
import useGetGoals from "../hooks/actions/useGetGoals";
import useGetSessions from "./../hooks/actions/useGetSessions";

export default function ActionDetails() {
  const [search, setSearch] = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    search.get("type") || "what_you_missed"
  );
  const { id } = useParams();
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);
  const { data: program } = useGetProgram(id);
  const { data: goals } = useGetGoals(id);
  const { data: sessions } = useGetSessions(id);

  useEffect(() => {
    const tabType = search.get("type");
    if (tabType && tabType !== activeTab) {
      setActiveTab(tabType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (activeTab !== search.get("type")) {
      setSearch({ type: activeTab });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, setSearch]);


  return (
    <section className="bootcamp_details">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h3 data-aos="fade-up">{program?.title}</h3>
              <p data-aos="fade-up">{program?.description}</p>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="img" data-aos="zoom-in-up">
              <img src={program?.image} alt={program?.title} />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 p-2 mt-5">
            <div className="header">
              <h2>
                {lang === "ar" ? (
                  <div data-aos="fade-up">
                    {t("goals")} <span>{t("program")}</span>
                  </div>
                ) : (
                  <div data-aos="fade-up">
                    {t("program")} <span>{t("goals")}</span>
                  </div>
                )}
              </h2>
              <p data-aos="fade-up">{program?.goal_text}</p>
            </div>
          </div>
          {goals?.map((goal) => (
            <div className="col-lg-6 col-12 p-2" key={goal.id}>
              <div className="goal_card" data-aos="fade-up">
                <h2>{goal?.title}</h2>
                <p>{goal?.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-12 p-2">
            <div className="header">
              <h2 data-aos="fade-up">{t("sessions")}</h2>
            </div>
          </div>
          <div className="col-lg-8 col-12 p-2">
            <div className="tabs" data-aos="fade-up">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={activeTab === "upcoming" ? "active" : ""}
              >
                {t("upComming")}
              </button>
              <button
                onClick={() => setActiveTab("what_you_missed")}
                className={activeTab === "what_you_missed" ? "active" : ""}
              >
                {t("whatYouMissed")}
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {sessions?.map((session) => (
            <div className="col-lg-4 col-12 p-2" key={session?.id}>
              <div className="session_card" data-aos="fade-up">
                <div className="img">
                  <img src={session?.image} alt={session?.title} />
                  <div className="content">
                    <span>{session?.title}</span>
                    <h2>{session?.sub_title}</h2>
                    <p>{session?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
