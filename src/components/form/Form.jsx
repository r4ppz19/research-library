import { useState } from "react";
import style from "./Form.module.css";
import Input from "./TextField";
import Button from "../button/Button";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Input
        label="Username"
        placeholder="Enter username"
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="Password"
        placeholder="Enter password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Sign in</Button>
    </form>
  );
}

export default Form;
