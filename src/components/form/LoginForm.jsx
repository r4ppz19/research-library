import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, LogIn } from "lucide-react";
import style from "./LoginForm.module.css";
import TextField from "./TextField";
import Button from "../button/Button";

function LoginForm({ loginMode }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginMode === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.inputGroup}>
        <div className={style.labelGroup}>
          <User size={16} />
          <label className={style.label} htmlFor="username">
            Username
          </label>
        </div>
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
        <div className={style.labelGroup}>
          <Lock size={16} />
          <label className={style.label} htmlFor="password">
            Password
          </label>
        </div>
        <TextField
          type="password"
          label="Password"
          placeholder="Enter password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit">
        <LogIn size={20} />
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
