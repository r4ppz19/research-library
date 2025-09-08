import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "lucide-react";
import style from "./LoginForm.module.css";
import TextField from "./TextField";
import Button from "../button/Button";
import { LogIn } from "lucide-react";

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
      <div className={style.inputGroup}>
        <label className={style.label} for="username">Username</label>
        <TextField
          type="text"
          label="Username"
          placeholder="Enter username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={style.inputGroup}>
        <label className={style.label} for="password">Username</label>
        <TextField
          type="password"
          label="Password"
          placeholder="Enter password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit" icon={<LogIn size={20} />}>
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
