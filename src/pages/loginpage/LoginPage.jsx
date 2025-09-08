import { useState } from "react";
import style from "./LoginPage.module.css";
import LoginForm from "../../components/form/LoginForm";
import SchoolLogo from "../../assets/school-logo.svg";

function LoginPage() {
  const [loginMode, setLoginMode] = useState("admin");

  const toggleLoginMode = () => {
    setLoginMode((prev) => (prev === "admin" ? "student" : "admin"));
  };

  return (
    <div className={`${style.page} ${style[loginMode]}`}>
      <div className={style.mainCard}>
        <div className={style.introCard}>
          <img className={style.logo} src={SchoolLogo} alt="acd-logo" />
          <div className={style.textContainer}>
            <h1 className={style.title}>Assumption Research Library</h1>
            <p className={style.description}>
              A digital library of research and innovations from our faculty and
              students.
            </p>
          </div>
        </div>
        <div className={style.formCard}>
          <h2 className={style.header}>
            {loginMode === "admin" ? "Admin Login" : "Student Login"}
          </h2>
          <p className={style.text}>
            {loginMode === "admin"
              ? "Enter your credentials to access the admin dashboard"
              : "Enter your credentials to access the student dashboard"}
          </p>
          <LoginForm loginMode={loginMode} />
          <p className={style.redirect}>
            {loginMode === "admin" ? "Are you a student?" : "Are you an admin?"}
            <button
              type="button"
              className={style.linkButton}
              onClick={toggleLoginMode}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
