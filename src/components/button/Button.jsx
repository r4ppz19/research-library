import style from "./Button.module.css";

function Button({ type = "button", onClick, children }) {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
