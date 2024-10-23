const FileUploadField = ({ label, uploadText, Accept, ...props }) => {
  return (
    <div className="input-field">
      <label htmlFor={props?.id}>
        {label} {props?.required ? <b style={{ color: "red" }}>*</b> : null}{" "}
      </label>
      <label htmlFor={props?.id} className="cv_area">
        <input type="file" accept={Accept} {...props} />
        <div className="content">
          <i className="fa-regular fa-paperclip"></i>
          <p>{uploadText}</p>
        </div>
      </label>
    </div>
  );
};

export default FileUploadField;
