import style from "./AdminDashboard.module.css";
import Header from "../../components/header/AdminHeader";

function AdminDashboard() {
  return (
    <div className={style.page}>
      <Header />
      <main>
        <section></section>
      </main>
    </div>
  );
}

export default AdminDashboard;
