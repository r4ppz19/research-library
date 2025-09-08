import style from "./TextField.module.css";

function TextField({
  id,
  value,
  onChange,
  placeholder,
  icon,
  padding,
  type = "text",
}) {
  return (
    <div
      className={style.inputWrapper}
      style={padding ? { padding } : undefined}
    >
      {icon && <span className={style.icon}>{icon}</span>}
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

export default TextField;
