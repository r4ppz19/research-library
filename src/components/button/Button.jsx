import style from "./Button.module.css";

function Button({
  type = "button",
  onClick,
  children,
  variant = "primary",
  icon,
  padding,
}) {
  return (
    <button
      type={type}
      className={`${style.button} ${style[variant]}`}
      style={{ padding }}
      onClick={onClick}
    >
      {icon && icon}
      {children}
    </button>
  );
}

export default Button;
