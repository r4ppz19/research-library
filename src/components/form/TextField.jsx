import style from "./TextField.module.css";

function TextField({
  id,
  value,
  onChange,
  placeholder,
  icon,
  type = "text",
  className = "",
  ...props
}) {
  return (
    <div className={`${style.inputWrapper} ${className || ""}`}>
      {icon && <span className={style.icon}>{icon}</span>}
      <input
        className={style.input}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default TextField;
