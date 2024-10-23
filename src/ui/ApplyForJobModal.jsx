import { Modal } from "react-bootstrap";
import InputField from "./form-elements/InputField";
import SelectField from "./form-elements/SelectField";
import FileUploadField from "./form-elements/FileUploadField";
import SubmitButton from "./form-elements/SubmitButton";

export default function ApplyForJobModal({ showModal, setShowModal }) {
  return (
    <Modal
      centered
      show={showModal}
      size="lg"
      onHide={() => setShowModal(false)}
      className="apply_for_job_modal"
    >
      <Modal.Header className="pb-0" closeButton>
        <h6>Join our Family</h6>
      </Modal.Header>
      <Modal.Body>
        <form className="form">
          <p>
            Share your details, and we&apos;ll contact you when a suitable
            opportunity occurs.
          </p>
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label="Full Name"
                placeholder="John Doe"
                required
                id="name"
                name="name"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label="Email Address"
                placeholder="example@example.com"
                required
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label="Age"
                placeholder="00"
                required
                type="number"
                id="age"
                name="age"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={"Select Gender"}
                required
                label="Gender"
                id="gender"
                name="gender"
                options={[
                  { name: "Male", value: "male" },
                  { name: "Female", value: "female" },
                ]}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={"select"}
                required
                label="Nationality"
                id="nationality"
                name="nationality"
                options={[{ name: "Egypt", value: "egypt" }]}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={"select"}
                required
                label="City"
                id="city"
                name="city"
                options={[{ name: "Cairo", value: "cairo" }]}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={"Are you willing to relocate?"}
                required
                label="Are you willing to relocate?"
                id="relocate"
                name="relocate"
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={"Department"}
                required
                label="Department"
                id="department"
                name="department"
                options={[
                  { name: " Human Capital Department", value: "1" },
                  { name: "Marketing and Communication", value: "2" },
                  { name: "Sales and Business Development", value: "3" },
                  { name: "Digital Factory", value: "4" },
                  { name: "Digital Lab", value: "5" },
                  { name: "Digital Platform", value: "6" },
                  { name: "Finance and Accounting", value: "7" },
                  { name: "Information Technology", value: "8" },
                  { name: "PMO", value: "9" },
                  { name: "Digital Studio", value: "10" },
                ]}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={"Education degree"}
                required
                label="Education degree"
                id="relocate"
                name="relocate"
                options={[
                  { name: "Diploama", value: "diploama" },
                  { name: "Bachelor", value: "bachelor" },
                  { name: "Master", value: "bachelor" },
                  { name: "PHD", value: "phd" },
                ]}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label="Major"
                placeholder="Major"
                required
                id="major"
                name="major"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={"Are you a fresh graduate?"}
                required
                label="Are you a fresh graduate?"
                id="fresh"
                name="fresh"
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={"Are you currently working?"}
                required
                label="Are you currently working?"
                id="currently_working"
                name="currently_working"
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label="Last job title"
                placeholder="Last job title"
                id="last_job_title"
                name="last_job_title"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label="Years of experience"
                placeholder="00"
                required
                type="number"
                id="years_of_experience"
                name="years_of_experience"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label="Last job total salary in SAR"
                placeholder="00"
                type="number"
                id="last_job_total_salary"
                name="last_job_total_salary"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label="Expected total salary in SAR"
                placeholder="00"
                type="number"
                required
                id="expected_total_salary"
                name="expected_total_salary"
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                defaultOption={"Notice period"}
                required
                label="Notice period"
                id="notice_period"
                name="notice_period"
                options={[
                  { name: "30 days", value: "30" },
                  { name: "60 days", value: "60" },
                  { name: "immediate", value: "immediate" },
                ]}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label="How did you find us?"
                placeholder="How did you find us?"
                id="how_did_you_find_us"
                name="how_did_you_find_us"
              />
            </div>
            <div className="col-12 p-2">
              <FileUploadField
                label="Upload your cv"
                required
                id="cv"
                name="cv"
                Accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                uploadText={"Upload your cv"}
              />
            </div>
            <div className="col-12 p-2 mt-4">
                <SubmitButton name={"Apply"}/>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
