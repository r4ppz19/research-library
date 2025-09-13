import style from "./Button.module.css";
import clsx from "clsx";

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
      className={clsx(style.button, style[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
