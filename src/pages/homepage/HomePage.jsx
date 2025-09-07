import { useState } from "react";
import style from "./HomePage.module.css";
import Header from "../../components/header/Header";
import TextField from "../../components/form/TextField";
import { Search } from "lucide-react";

function HomePage() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <main
      className={style.page}
      style={{ paddingTop: menuOpen ? "150px" : "100px" }}
    >
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <section className={style.textContainer}>
        <h1 className={style.header}>Discover Academic Research</h1>
        <p className={style.subHeader}>
          Explore a growing collection of academic research papers and
          publications...
        </p>
      </section>
      <section className={style.searchContainer}>
        <TextField
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder={"Search research paper"}
          icon={<Search size={20} />}
        />
      </section>
    </main>
  );
}

export default HomePage;
