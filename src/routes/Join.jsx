import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ApplyForJobModal from "../ui/ApplyForJobModal";
import useGetVacancies from "../hooks/careers/useGetVacancies";
import useGetDepartments from "../hooks/careers/useGetDepartments";

export default function Join() {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [targetId, setTargetId] = useState(null);

  const [searchData, setSearchData] = useState({
    title: searchParams.get("title") || "",
    department_id: searchParams.get("department") || "",
  });

  const { data: jobs } = useGetVacancies(searchData);
  const { data: deps } = useGetDepartments();

  useEffect(() => {
    const params = {};
    if (searchData.title) params.title = searchData.title;
    if (searchData.department_id) params.department = searchData.department_id;

    setSearchParams(params);
  }, [searchData, setSearchParams]);

  const handleInputChange = (e) => {
    setSearchData((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const handleDepartmentChange = (e) => {
    setSearchData((prev) => ({
      ...prev,
      department_id: e.target.value,
    }));
  };

  return (
    <section className="join_page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 p-2 mb-5">
            <div className="header">
              <h1 data-aos="fade-up">{t("makeAnImpact")}</h1>
              <p data-aos="fade-up">{t("join")}</p>
            </div>
          </div>
          <div className="col-12 p-2 pt-5 pb-5">
            <div className="join_header" data-aos="fade-up">
              <h2>
                {lang === "ar" ? (
                  <>
                    {t("vacancies")} <span>{t("open")}</span>
                  </>
                ) : (
                  <>
                    {t("open")} <span>{t("vacancies")}</span>
                  </>
                )}
              </h2>
              <div className="filter_form">
                <div className="search_form">
                  <input
                    type="text"
                    placeholder={t("search")}
                    value={searchData.title}
                    onChange={handleInputChange}
                  />
                  <button>
                    <i className="fa-light fa-magnifying-glass"></i>
                  </button>
                </div>
                <select
                  name="job_type"
                  id="job_type"
                  value={searchData.department_id}
                  onChange={handleDepartmentChange}
                >
                  <option value="">{t("all")}</option>
                  {deps?.map((dep) => (
                    <option value={dep?.id} key={dep?.id}>
                      {dep?.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="vacancies">
            {jobs?.map((job) => (
              <div className="vacancy_card" data-aos="fade-up" key={job?.id}>
                <h6>{job?.title}</h6>
                <p>{job?.description}</p>
                <div className="bottom">
                  <span>
                    <i className="fa-regular fa-user"></i> {job?.app_count}{" "}
                    {t("applicants")}
                  </span>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setTargetId(job?.id);
                    }}
                  >
                    {t("applyNow")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ApplyForJobModal
        id={targetId}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </section>
  );
}
