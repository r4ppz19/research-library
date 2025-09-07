import style from "./SearchTextField.module.css";
import { Search } from "lucide-react";

function SearchTextField({ id, value, onChange, placeholder }) {
  return (
    <div className={style.inputContainer}>
      <Search size={20} className={style.icon} />
      <input
        className={style.input}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchTextField;
