import { useState } from "react";
import style from "./HomePage.module.css";
import Header from "../../components/header/Header";
import TextField from "../../components/form/TextField";
import { Search } from "lucide-react";
import ResearchCard from "../../components/card/ResearchCard";

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
        <p className={style.text}>
          Explore a growing collection of academic research papers and
          publications. Our library highlights the innovative work of students
          and faculty across departments — advancing knowledge and inspiring new
          ideas
        </p>
      </section>
      <section className={style.searchContainer}>
        <TextField
          placeholder={"Search research paper"}
          icon={<Search size={20} />}
          padding="0px 10px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </section>
      <section className={style.researchContainer}>
        <ResearchCard />
        <ResearchCard />
        <ResearchCard />
        <ResearchCard />
        <ResearchCard />
        <ResearchCard />
      </section>
    </main>
  );
}

export default HomePage;
