import style from "./HomePage.module.css";
import Header from "../../components/header/Header";

function HomePage() {
  return (
    <div className={style.page}>
      <Header />
    </div>
  );
}

export default HomePage;
