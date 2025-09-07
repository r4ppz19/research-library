import style from "./TextField.module.css";

function TextField({ label, value, placeholder, onChange, id }) {
  return (
    <div className={style.inputGroup}>
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={style.input}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;
