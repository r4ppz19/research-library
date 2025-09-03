import React, { useState } from "react";
import "./LoginPage.css";
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
    <div className="loginContainer">
      {/* left/top part*/}
      <div className="introContainer">
        <h1 className="introTitle">Research Library</h1>
        <p className="introText">
          Sign in to manage your research library content and keep academic
          resources organized with our intuitive admin dashboard.
        </p>
      </div>

      {/* right/buttom part */}
      <div className="formContainer">
        <h2 className="formTitle">Admin Sign In</h2>
        <form className="form" onSubmit={handleSubmit}>
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
