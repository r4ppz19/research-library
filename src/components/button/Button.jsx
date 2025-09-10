import style from "./Button.module.css";

function Button({
  type = "button",
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`${style.button} ${style[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
