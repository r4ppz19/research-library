import style from "./LoginPage.module.css";
import Form from "../../components/form/Form";
import SchoolLogo from "../../assets/school-logo.svg";

function LoginPage() {
  return (
    <div className={style.page}>
      <div className={style.mainCard}>
        <div className={style.introCard}>
          <img className={style.logo} src={SchoolLogo} alt="acd-logo" />
          <h1 className={style.title}>Assumption Research Library</h1>
          <h3 className={style.description}>
            A digital library of research and innovations from our faculty and
            students.
          </h3>
        </div>
        <div className={style.formCard}>
          <h2 className={style.header}>Admin login</h2>
          <p className={style.text}>
            Enter your credentials to access the admin dashboard
          </p>
          <Form />
          <p className={style.redirect}>
            Are you a student?{" "}
            <a className={style.loginLink} href="#">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
