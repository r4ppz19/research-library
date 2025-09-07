import style from "./Header.module.css";
import { Menu } from "lucide-react";
import SchoolLogo from "../../assets/school-logo.svg";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.titleContainer}>
        <img className={style.logo} src={SchoolLogo} alt="logo" />
        <h1 className={style.title}>Research Library</h1>
      </div>

      <button className={style.menuButton}>
        <Menu size={20} />
      </button>
    </header>
  );
}

export default Header;
