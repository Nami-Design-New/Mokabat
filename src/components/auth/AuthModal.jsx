import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Join from "./Join";

export default function AuthModal({ show, setShow, type }) {
  const [formType, setFormType] = useState("join");

  useEffect(() => {
    setFormType(type);
  }, [type]);

  const handleClose = () => {
    setShow(false);
    setFormType("join");
  };

  return (
    <Modal
      centered
      show={show}
      className="authModal"
      backdrop="static"
      size="xl"
    >
      <Modal.Body>
        <button className="closeModal" onClick={handleClose}>
          <i className="fa-regular fa-x"></i>
        </button>
        <section className="auth_section">
          <div className="form_wrapper">
            {formType === "join" && (
              <Join setFormType={setFormType} setShow={setShow} />
            )}
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}
