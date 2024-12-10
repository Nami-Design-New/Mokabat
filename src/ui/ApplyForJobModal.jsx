import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import InputField from "./form-elements/InputField";
import SelectField from "./form-elements/SelectField";
import FileUploadField from "./form-elements/FileUploadField";
import SubmitButton from "./form-elements/SubmitButton";
import useGetNatonalities from "../hooks/careers/useGetNatonalities";
import useGetDegrees from "../hooks/careers/useGetDegrees";
import useGetDepartments from "../hooks/careers/useGetDepartments";
import axiosInstance from "../utils/axiosInstance";

export default function ApplyForJobModal({ showModal, setShowModal, id }) {
  const { t } = useTranslation();
  const { data: nationalities } = useGetNatonalities();
  const { data: departments } = useGetDepartments();
  const { data: degrees } = useGetDegrees();

  const queryClinet = useQueryClient();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    nationality_id: "",
    city: "",
    are_you_relocate: "",
    department_id: "",
    education_degree_id: "",
    major: "",
    fresh_graduate: "",
    current_work: "",
    last_job_title: "",
    years_of_experience: "",
    last_salary: "",
    expected_salary: "",
    notice_period: "",
    how_find_us: "",
    file: "",
    vacancy_id: "",
  });

  useEffect(() => {
    if (id) {
      setFormData((prev) => ({ ...prev, vacancy_id: id }));
    }
  }, [id]);

  const handleChange = (e) => {
    if (e.target?.name === "file") {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const hideModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      age: "",
      gender: "",
      nationality_id: "",
      city: "",
      are_you_relocate: "",
      department_id: "",
      education_degree_id: "",
      major: "",
      fresh_graduate: "",
      current_work: "",
      last_job_title: "",
      years_of_experience: "",
      last_salary: "",
      expected_salary: "",
      notice_period: "",
      how_find_us: "",
      file: "",
      vacancy_id: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData?.file) {
      toast.error(t("uploadResume"));
      setLoading(false);
      return;
    }

    try {
      const res = await axiosInstance.post("/applications", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res?.data?.code === 200) {
        toast.success(t("appliedSucessfully"));
        hideModal();
        queryClinet.invalidateQueries({ queryKey: ["jobs"] });
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      centered
      show={showModal}
      size="lg"
      onHide={hideModal}
      backdrop="static"
      className="apply_for_job_modal"
    >
      <Modal.Header className="pb-0" closeButton>
        <h6>{t("joinOurFamily")}</h6>
      </Modal.Header>
      <Modal.Body>
        <form className="form" onSubmit={handleSubmit}>
          <p>{t("joinSub")}</p>
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("fullName")}
                placeholder="John Doe"
                required
                id="name"
                name="name"
                value={formData?.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("emailAddress")}
                placeholder="example@example.com"
                required
                type="email"
                id="email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("age")}
                placeholder="00"
                required
                type="number"
                id="age"
                name="age"
                value={formData?.age}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={t("select")}
                required
                label={t("gender")}
                id="gender"
                name="gender"
                options={[
                  { name: t("male"), value: "male" },
                  { name: t("female"), value: "female" },
                ]}
                value={formData?.gender}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={t("select")}
                required
                label={t("nationality")}
                id="nationality_id"
                name="nationality_id"
                options={nationalities?.map((na) => ({
                  name: na?.nationality,
                  value: na?.id,
                }))}
                value={formData?.nationality_id}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                required
                label={t("city")}
                placeholder={t("city")}
                id="city"
                name="city"
                value={formData?.city}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={t("willingRelocate")}
                required
                label={t("willingRelocate")}
                id="are_you_relocate"
                name="are_you_relocate"
                options={[
                  { name: t("yes"), value: 1 },
                  { name: t("no"), value: 0 },
                ]}
                value={formData?.are_you_relocate}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={t("department")}
                required
                label={t("department")}
                id="department_id"
                name="department_id"
                options={departments?.map((department) => ({
                  name: department?.title,
                  value: department?.id,
                }))}
                value={formData?.department_id}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={t("educationDegree")}
                required
                label={t("educationDegree")}
                id="education_degree_id"
                name="education_degree_id"
                options={degrees?.map((degree) => ({
                  name: degree?.title,
                  value: degree?.id,
                }))}
                value={formData?.education_degree_id}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("major")}
                placeholder={t("major")}
                required
                id="major"
                name="major"
                value={formData?.major}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={t("freshGradute")}
                required
                label={t("freshGradute")}
                id="fresh_graduate"
                name="fresh_graduate"
                options={[
                  { name: t("yes"), value: 1 },
                  { name: t("no"), value: 0 },
                ]}
                value={formData?.fresh_graduate}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={t("currentlyWorking")}
                required
                label={t("currentlyWorking")}
                id="current_work"
                name="current_work"
                options={[
                  { name: t("yes"), value: 1 },
                  { name: t("no"), value: 0 },
                ]}
                value={formData?.current_work}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("lastJobTitle")}
                placeholder={t("lastJobTitle")}
                id="last_job_title"
                name="last_job_title"
                value={formData?.last_job_title}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("yearsOfExperience")}
                placeholder="00"
                required
                type="number"
                id="years_of_experience"
                name="years_of_experience"
                value={formData?.years_of_experience}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("lastJobSalary")}
                placeholder="00"
                type="number"
                id="last_salary"
                name="last_salary"
                value={formData?.last_salary}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("expectSalary")}
                placeholder="00"
                type="number"
                required
                id="expected_salary"
                name="expected_salary"
                value={formData?.expected_salary}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={t("noticePeriod")}
                required
                label={t("noticePeriod")}
                id="notice_period"
                name="notice_period"
                options={[
                  { name: t("thirtyDays"), value: "thirty_days" },
                  { name: t("sixtyDays"), value: "sixty_days " },
                  { name: t("immediate"), value: "immediate " },
                ]}
                value={formData?.notice_period}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("howDidYouFindUs")}
                placeholder={t("howDidYouFindUs")}
                id="how_find_us"
                name="how_find_us"
                value={formData?.how_find_us}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 p-2">
              <FileUploadField
                label={t("uploadYourCv")}
                id="file"
                name="file"
                Accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                uploadText={
                  formData?.file ? formData?.file?.name : t("uploadDesc")
                }
                onChange={handleChange}
              />
            </div>
            <div className="col-12 p-2 mt-4">
              <SubmitButton loading={loading} name={t("apply")} />
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
