import { Form } from "react-bootstrap";

export default function SelectField({
  label,
  defaultOption,
  hint,
  options,
  ...props
}) {
  return (
    <div className="input-field">
      <label htmlFor={props?.id}>
        {label}  {props?.required ? <b style={{ color: "red" }}>*</b> : null} {hint && <span className="hint">{hint}</span>}
      </label>
      <Form.Select {...props}>
        <option value="" disabled>
          {defaultOption}
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
