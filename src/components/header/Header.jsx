import { useState } from "react";
import style from "./Header.module.css";
import { Menu, X, CircleUser } from "lucide-react";
import SchoolLogo from "../../assets/school-logo.svg";
import Button from "../button/Button";
import ProfileModal from "../modal/ProfileModal";
import student from "../../dummy/student";

function Header({ menuOpen, toggleMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.titleContainer}>
        <img className={style.logo} src={SchoolLogo} alt="school-logo" />
        <h1 className={style.title}>ACD Research Library</h1>
      </div>

      <Button
        className={style.accountButtonDesktop}
        onClick={() => setIsOpen(true)}
      >
        <CircleUser size={16} />
        Account
      </Button>

      <button className={style.menuButton} onClick={toggleMenu}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {menuOpen && (
        <div className={style.dropdownMenu}>
          <Button
            className={style.accountButtonMobile}
            onClick={() => setIsOpen(true)}
          >
            <CircleUser size={16} />
            Account
          </Button>
        </div>
      )}

      <ProfileModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        student={student}
      />
    </header>
  );
}

export default Header;
