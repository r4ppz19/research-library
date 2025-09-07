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
      <TextField
        type="text"
        label="Username"
        placeholder="Enter username"
        id="username"
        value={username}
        icon={<User size={16} />}
        padding="10px 10px"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        placeholder="Enter password"
        id="password"
        value={password}
        icon={<Lock size={16} />}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" icon={<LogIn size={20} />}>
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
