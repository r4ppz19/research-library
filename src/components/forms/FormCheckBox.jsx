import React from "react";
import "./FormCheckbox.css";

function FormCheckbox({ label, id, checked, onChange }) {
  return (
    <div className="form-checkbox">
      <input
        type="checkbox"
        id={id}
        className="form-checkbox__input"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="form-checkbox__label">
        {label}
      </label>
    </div>
  );
}

export default FormCheckbox;
