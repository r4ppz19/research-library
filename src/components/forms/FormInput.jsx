// src/components/forms/FormInput.jsx
import React from "react";
import "./FormInput.css";

function FormInput({ label, id, type, placeholder, value, onChange }) {
  return (
    <div className="form-group">
      <label className="form-group__label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="form-group__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
