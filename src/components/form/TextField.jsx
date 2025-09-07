import style from "./TextField.module.css";

function Input({ label, value, type = "text", placeholder, onChange, id }) {
  return (
    <div className={style.inputGroup}>
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={style.input}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
