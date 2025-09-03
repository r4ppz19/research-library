import React from "react";
import "./index.css";
import style from "./App.module.css";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <div className={style.mainContainer}>
      <LoginPage />
    </div>
  );
}

export default App;
