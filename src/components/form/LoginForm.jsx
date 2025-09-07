import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./LoginForm.module.css";
import TextField from "./TextField";
import Button from "../button/Button";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/homepage");
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <TextField
        label="Username"
        placeholder="Enter username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        placeholder="Enter password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Sign in</Button>
    </form>
  );
}

export default LoginForm;
