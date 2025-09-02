import React, { useState } from "react";
import "./LoginPage.css";
import FormInput from "../components/forms/FormInput.jsx";
import FormCheckbox from "../components/forms/FormCheckBox.jsx";
import Button from "../components/buttons/Button.jsx";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password, rememberMe });
    // This is where you would make an API call to your Spring Boot backend
  };

  return (
    <div className="login-page">
      {/* left/top part*/}
      <div className="login-page__intro">
        <h1 className="login-page__intro-title">Research Library</h1>
        <p className="login-page__intro-text">
          Sign in to manage your research library content and keep academic
          resources organized with our intuitive admin dashboard.
        </p>
      </div>

      {/* right/buttom part */}
      <div className="login-page__form-container">
        <h2 className="login-page__form-title">Admin Sign In</h2>
        <form className="login-page__form" onSubmit={handleSubmit}>
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
          <FormCheckbox
            label="Remember me for 30 days"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <Button onClick={handleSubmit}>Sign in</Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
