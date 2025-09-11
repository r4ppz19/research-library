import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import { Menu, X, CircleUser, LogOut } from "lucide-react";
import SchoolLogo from "/school-logo.svg";
import Button from "../button/Button";
import ProfileModal from "../modal/ProfileModal";
import student from "../../dummy/student";

function Header({ menuOpen, toggleMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <header className={style.header}>
      <div className={style.titleContainer}>
        <img className={style.logo} src={SchoolLogo} alt="school-logo" />
        <h1 className={style.title}>Research Repository</h1>
      </div>

      <div className={style.actionContainer}>
        <Button
          className={style.accountButtonDesktop}
          onClick={() => setIsOpen(true)}
        >
          <CircleUser size={16} />
          Account
        </Button>
        <Button className={style.logoutButton} onClick={handleLogout}>
          <LogOut size={16} />
          Log-out
        </Button>
      </div>

      <button className={style.menuButton} onClick={toggleMenu}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {menuOpen && (
        <div className={style.dropdownMenu}>
          <Button
            className={style.buttonMobile}
            onClick={() => setIsOpen(true)}
          >
            <CircleUser size={14} />
            Account
          </Button>

          <Button className={style.buttonMobile} onClick={handleLogout}>
            <LogOut size={14} />
            Log-out
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
