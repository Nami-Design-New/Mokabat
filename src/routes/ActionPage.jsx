import { useEffect, useState } from "react";
import { Calendar } from "react-multi-date-picker";
import { Link, useParams, useSearchParams } from "react-router-dom";
import useGetActions from "../hooks/actions/useGetActions";
import useGetPrograms from "../hooks/actions/useGetPrograms";
import useGetProgramsByDate from "../hooks/actions/useGetProgramsByDate";
import { useTranslation } from "react-i18next";

export default function ActionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [action, setAction] = useState(null);
  const { id } = useParams();
  const { t } = useTranslation();
  const { data: actions } = useGetActions();
  const { data: programs } = useGetPrograms(id);
  const { data: programsByDate } = useGetProgramsByDate(id);

  useEffect(() => {
    if (actions && id) {
      setAction(actions.find((item) => item.id === +id));
    }
  }, [actions, id]);

  const currentDate =
    searchParams.get("date") || new Date().toISOString().split("T")[0];

  const handleDateChange = (date) => {
    setSearchParams({ date: date.format("YYYY-MM-DD") });
  };

  return (
    <section className="programs_page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h3 data-aos="fade-up">{action?.title}</h3>
              <p data-aos="fade-up">{action?.description}</p>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="programs_calender" data-aos="fade-up">
              <Calendar
                value={new Date(currentDate)}
                onChange={handleDateChange}
                format="YYYY-MM-DD"
              />
              <div className="programs">
                <h6>{action?.title}</h6>
                <div className="menu">
                  {programsByDate?.length > 0 ? (
                    programsByDate?.map((program) => (
                      <Link
                        to={`/actions/${id}/${program?.id}`}
                        key={program?.id}
                      >
                        <span>{program?.title}</span>
                        <p>{program?.description}</p>
                      </Link>
                    ))
                  ) : (
                    <p
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0",
                      }}
                    >
                      {t("noProgramsFound")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {programs?.map((program) => (
            <div className="col-lg-3 col-md-6 col-12 p-2" key={program?.id}>
              <Link
                to={`/actions/${id}/${program?.id}`}
                className="prpgramm_card"
                data-aos="fade-up"
              >
                <div className="img">
                  <img src={program?.image} alt={program?.title} />
                </div>
                <div className="content">
                  <p>{program?.date}</p>
                  <h4>{program?.title}</h4>
                  <p>{program?.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
