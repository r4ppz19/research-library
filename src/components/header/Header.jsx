import style from "./Header.module.css";
import { Menu, X, CircleUser } from "lucide-react";
import SchoolLogo from "../../assets/school-logo.svg";
import Button from "../button/Button"

function Header({ menuOpen, toggleMenu }) {
  return (
    <header className={style.header}>
      <div className={style.titleContainer}>
        <img className={style.logo} src={SchoolLogo} alt="logo" />
        <h1 className={style.title}>ACD Research Library</h1>
      </div>

      <button className={style.accountButton} type="buttom"><CircleUser size={16} />Account</button>

      <button className={style.menuButton} onClick={toggleMenu}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {menuOpen && (
        <div className={style.dropdownMenu}>
          <a href="/account">Account</a>
        </div>
      )}
    </header>
  );
}

export default Header;
