import style from "./Button.module.css";

function Button({
  type = "button",
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`${style.button} ${style[variant]} ${className}`}
      {...props}
    >
      {icon && <span className={style.icon}>{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
