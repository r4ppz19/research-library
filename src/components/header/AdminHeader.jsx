import style from "./AdminHeader.module.css";

function AdminHeader() {
  return (
    <header className={style.header}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Research Repository</h1>
        <div className={style.textContainer}>
          <div className={style.modeContainer}>
            <p className={style.mode}>Admin mode</p>
          </div>
          <p className={style.text}>Manage research papers</p>
        </div>
      </div>
      <div className={style.actionContainer}>
        <button>View library</button>
        <button>Log-Out</button>
      </div>
    </header>
  );
}

export default AdminHeader;
