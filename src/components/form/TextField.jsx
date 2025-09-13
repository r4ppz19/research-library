import style from "./TextField.module.css";
import clsx from "clsx";

function TextField({ icon, className, ...props }) {
  return (
    <div className={clsx(style.inputWrapper, className)}>
      {icon && <span className={style.icon}>{icon}</span>}
      <input {...props} className={style.input} />
    </div>
  );
}

export default TextField;
