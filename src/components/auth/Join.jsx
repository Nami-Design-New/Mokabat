import { useState } from "react";
import { useTranslation } from "react-i18next";
import SubmitButton from "../../ui/form-elements/SubmitButton";
import InputField from "../../ui/form-elements/InputField";
import { handleChange } from "../../utils/helpers";
import SelectField from "../../ui/form-elements/SelectField";
import PhoneInput from "../../ui/form-elements/PhoneInput";
// import MultiSelect from "../../ui/form-elements/MultiSelect";

const countries = [
  { name: "Egypt", value: "eg" },
  { name: "Saudi Arabia", value: "sa" },
];

// const languages = [
//   { name: "English", value: "en" },
//   { name: "Arabic", value: "ar" },
// ];

function Join({ setShow, setFormType }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  // const [languagesSelectedOptions, setLanguagesSelectedOptions] = useState([]);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    gender: "",
    age: "",
    nationality: "",
    city: "",
    email: "",
    country_code: "",
    phone: "",
    file: null,
    howKnowUs: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setShow(false);
      setFormData({
        firstname: "",
        lastname: "",
        password: "",
        gender: "",
        age: "",
        nationality: "",
        city: "",
        email: "",
        country_code: "",
        phone: "",
        file: null,
        languages: [],
        howKnowUs: "",
      });
    } finally {
      setFormType("join");
      setLoading(false);
    }
  };

  console.log(formData?.gender);

  const handleChangeUserName = (e) => {
    const { value } = e.target;
    const validInput = /^[a-zA-Z0-9]*$/;

    if (validInput.test(value)) {
      setFormData((prev) => ({
        ...prev,
        username: value,
      }));
    }
  };

  // const handleSelectLanguages = (selectedItems) => {
  //   setLanguagesSelectedOptions(selectedItems);
  //   const selectedValues = selectedItems
  //     ? selectedItems?.map((option) => option.value)
  //     : [];
  //   setFormData({
  //     ...formData,
  //     languages: selectedValues,
  //   });
  // };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-header">
        <div className="image-wrapper">
          <img src="/images/logo.svg" alt="" />
        </div>
        <h2 className="title">{t("auth.joinTitle")}</h2>
        <p className="subtitle">{t("auth.joinSubtitle")}</p>
      </div>
      {/* name */}
      <div className="form_group">
        <InputField
          required
          label={t("auth.firstName")}
          placeholder={t("writeHere")}
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={(e) => handleChangeUserName(e, setFormData)}
        />
        <InputField
          required
          label={t("auth.lastName")}
          placeholder={t("writeHere")}
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={(e) => handleChangeUserName(e, setFormData)}
        />
      </div>
      {/* age & gender */}
      <div className="form_group">
        <InputField
          required
          label={t("auth.age")}
          placeholder={"00"}
          name="age"
          id="age"
          type="number"
          value={formData?.age}
          onChange={(e) => {
            handleChange(e, setFormData);
          }}
        />
        <div className="input-field">
          <label htmlFor="type">{t("auth.gender")}</label>
          <div className="radios">
            <label htmlFor="male">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formData?.gender === "male"}
                onChange={(e) => handleChange(e, setFormData)}
              />
              <span>{t("auth.male")}</span>
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData?.gender === "female"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    gender: e.target.value,
                  });
                }}
              />
              <span>{t("auth.female")}</span>
            </label>
          </div>
        </div>
      </div>
      {/* nationality & city */}
      <div className="form_group">
        <SelectField
          label={t("auth.nationality")}
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={(e) =>
            setFormData({
              ...formData,
              nationality: e.target.value,
            })
          }
          options={countries?.map((country) => ({
            name: country?.name,
            value: country?.id,
          }))}
        />
        <InputField
          required
          label={t("auth.city")}
          placeholder={t("writeHere")}
          id="city"
          name="city"
          value={formData.city}
          onChange={(e) => handleChangeUserName(e, setFormData)}
        />
      </div>
      {/* email & phone */}
      <div className="form_group">
        <InputField
          required
          label={t("auth.email")}
          placeholder={t("auth.email")}
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e, setFormData)}
        />
        <PhoneInput
          label={t("auth.phone")}
          required
          type="number"
          id="phone"
          name="phone"
          placeholder={t("123-456-7890")}
          value={formData.phone}
          countryCode={formData.country_code}
          onChange={(e) => handleChange(e, setFormData)}
          onSelect={(code, setShow) => {
            setFormData((prev) => ({ ...prev, country_code: code }));
            setShow(false);
          }}
        />
      </div>
      {/* languages & how do you know about us */}
      {/* <div className="form_group">
        <MultiSelect
          label={t("auth.languages")}
          id="languages"
          name="languages"
          selectedOptions={languagesSelectedOptions}
          handleChange={handleSelectLanguages}
          options={languages?.map((skill) => ({
            label: skill?.name,
            value: skill?.id,
          }))}
        />
        <InputField
          required
          label={t("auth.howDoYouKnowAboutUs")}
          placeholder={t("writeHere")}
          id="howKnowUs"
          name="howKnowUs"
          value={formData.howKnowUs}
          onChange={(e) => handleChangeUserName(e, setFormData)}
        />
      </div> */}
      {/* document */}
      <div className="form_group">
        <div className="input-field">
          <label htmlFor="certificate-image">{t("auth.uploadDocument")}</label>
          <label className="image_upload">
            <input
              type="file"
              id="file"
              accept="image/*"
              name="file"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  file: e.target.files[0],
                }))
              }
            />
            {formData?.file ? (
              <>
                <img
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  src={
                    formData?.file?.type?.startsWith("image")
                      ? URL.createObjectURL(formData?.file)
                      : formData?.file
                  }
                  alt="upload"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFormData({
                      ...formData,
                      file: "",
                    });
                  }}
                >
                  <i className="fa-light fa-xmark"></i>
                </button>
              </>
            ) : (
              <img src="/images/gallery.svg" alt="upload" />
            )}
          </label>
        </div>
      </div>
      <SubmitButton name={t("auth.join")} loading={loading} />
      {/* <span className="noAccount">
        {t("auth.haveAccount")}{" "}
        <span onClick={() => setFormType("login")}>{t("auth.login")}</span>
      </span> */}
    </form>
  );
}

export default Join;
