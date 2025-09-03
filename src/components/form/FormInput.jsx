import React from "react";
import style from "./FormInput.module.css";

function FormInput({ label, id, type, placeholder, value, onChange }) {
  return (
    <div className={style.formGroup}>
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={style.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
