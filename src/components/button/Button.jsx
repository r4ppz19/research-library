import style from "./Button.module.css";
import { LogIn } from "lucide-react";

function Button({
  type = "button",
  onClick,
  children,
  variant = "primary",
  icon: Icon = LogIn,
  padding,
}) {
  return (
    <button
      type={type}
      className={`${style.button} ${style[variant]}`}
      style={{ padding }}
      onClick={onClick}
    >
      {Icon && <Icon size={20} className={style.icon} />}
      {children}
    </button>
  );
}

export default Button;
