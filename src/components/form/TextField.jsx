import style from "./TextField.module.css";

function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  icon,
  padding,
  type = "text",
}) {
  const showIconInLabel = label && icon;
  const showIconInInput = !label && icon;

  return (
    <div className={style.inputGroup}>
      {label && (
        <label className={style.label} htmlFor={id}>
          {showIconInLabel && <span className={style.icon}>{icon}</span>}
          {label}
        </label>
      )}

      <div
        className={style.inputWrapper}
        style={padding ? { padding } : undefined}
      >
        {showIconInInput && <span className={style.icon}>{icon}</span>}
        <input
          className={style.input}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default TextField;
