import React, { useState } from "react";
import style from "./LoginPage.module.css";
import FormInput from "../components/form/FormInput.jsx";
import Button from "../components//button/Button.jsx";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password, rememberMe });
    // This is where you would make an API call to your Spring Boot backend
  };

  return (
    <div className={style.loginContainer}>
      {/* left/top part*/}
      <div className={style.introContainer}>
        <h1 className={style.introTitle}>Research Library</h1>
        <p className={style.introText}>
          Sign in to manage your research library content and keep academic
          resources organized with our intuitive admin dashboard.
        </p>
      </div>

      {/* right/buttom part */}
      <div className={style.formContainer}>
        <h2 className={style.formTitle}>Admin Sign In</h2>
        <form className={style.form} onSubmit={handleSubmit}>
          <FormInput
            label="Username"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit}>Sign in</Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
