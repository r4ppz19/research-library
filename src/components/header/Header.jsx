import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import { Menu, X, CircleUser, LogOut, ToggleLeft } from "lucide-react";
import SchoolLogo from "/school-logo.svg";
import Button from "../button/Button";
import ProfileModal from "../modal/ProfileModal";
import student from "../../dummy/student";

function Header({ isMenuOpen, toggleMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        toggleMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, toggleMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <header className={style.header} ref={headerRef}>
      <div className={style.titleContainer}>
        <img className={style.logo} src={SchoolLogo} alt="school-logo" />
        <h1 className={style.title}>Research Library</h1>
      </div>

      <div className={style.actionContainer}>
        <Button className={style.buttonDesktop} onClick={() => setIsOpen(true)}>
          <CircleUser size={16} />
          Account
        </Button>
        <Button className={style.buttonDesktop} onClick={handleLogout}>
          <LogOut size={16} />
          Log-out
        </Button>
      </div>

      <button className={style.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isMenuOpen && (
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
