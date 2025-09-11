import { useState } from "react";
import { Search } from "lucide-react";
import style from "./StudentDashboard.module.css";
import Header from "../../components/header/Header";
import TextField from "../../components/form/TextField";
import ResearchCard from "../../components/card/ResearchCard";
import FilterResearch from "../../components/filter/FilterResearch";

function HomePage() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filters, setFilters] = useState({
    department: "All departments",
    year: "All year",
  });

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const dummyResearch = [
    {
      id: 1,
      title: "Quantum Computing Applications in Cryptography",
      author: "Dr. Eleanor Chen",
      date: "March 22, 2023",
      department: "Computer Science",
      abstract:
        "Quantum computing has emerged as a disruptive technology with the potential to transform modern cryptography. Traditional encryption algorithms such as RSA and ECC rely on the computational difficulty of problems like factoring and discrete logarithms, which quantum computers can solve efficiently using Shor’s algorithm. This research explores practical approaches to developing quantum-resistant cryptographic protocols, analyzing their strengths and weaknesses, and proposing hybrid methods that combine classical and quantum-safe encryption.",
    },
    {
      id: 2,
      title: "AI in Healthcare: Predictive Analytics",
      author: "John Martinez",
      date: "July 10, 2024",
      department: "Information Technology",
      abstract:
        "This study explores the application of artificial intelligence in healthcare, focusing on predictive analytics to improve patient outcomes. By leveraging large datasets of medical records, diagnostic tests, and genetic information, machine learning models can detect patterns and predict potential illnesses before symptoms manifest. The research discusses ethical implications, data privacy concerns, and implementation challenges, while highlighting case studies where AI-driven predictions significantly reduced hospital readmissions and improved personalized treatment plans.",
    },
    {
      id: 3,
      title: "Blockchain for Supply Chain Management",
      author: "Sophia Lee",
      date: "January 5, 2025",
      department: "Business Administration",
      abstract:
        "Blockchain technology offers new ways to improve transparency and accountability in global supply chain management. This research examines the integration of blockchain into logistics, focusing on real-time tracking of goods, verification of authenticity, and reduction of fraudulent activities. The paper analyzes case studies across industries such as food safety, pharmaceuticals, and manufacturing, where blockchain-based systems increased trust among stakeholders and optimized operational efficiency.",
    },
  ];

  const departments = [...new Set(dummyResearch.map((p) => p.department))];
  const years = [...new Set(dummyResearch.map((p) => p.date.split(" ").pop()))];

  const filteredResearch = dummyResearch.filter((paper) => {
    const matchesDepartment =
      filters.department === "All departments" ||
      paper.department === filters.department;

    const paperYear = paper.date.split(" ").pop();
    const matchesYear =
      filters.year === "All year" || paperYear === filters.year;

    const matchesSearch =
      paper.title.toLowerCase().includes(search.toLowerCase()) ||
      paper.author.toLowerCase().includes(search.toLowerCase()) ||
      paper.department.toLowerCase().includes(search.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(search.toLowerCase());

    return matchesDepartment && matchesYear && matchesSearch;
  });

  return (
    <main
      className={style.page}
      style={{ paddingTop: menuOpen ? "150px" : "100px" }}
    >
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <section className={style.heroSection}>
        <h1 className={style.header}>Discover Academic Research</h1>
        <p className={style.text}>
          Explore a growing collection of academic research papers and
          publications.
        </p>
      </section>

      <section className={style.searchSection}>
        <TextField
          className={style.textField}
          placeholder={"Search research paper"}
          icon={<Search size={20} />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FilterResearch
          departments={departments}
          years={years}
          onFilter={(selected) => setFilters(selected)}
        />
      </section>

      <section className={style.researchSection}>
        {filteredResearch.length > 0 ? (
          filteredResearch.map((paper) => (
            <ResearchCard
              key={paper.id}
              title={paper.title}
              author={paper.author}
              date={paper.date}
              department={paper.department}
              abstract={paper.abstract}
            />
          ))
        ) : (
          <p>No results found</p>
        )}
      </section>
    </main>
  );
}

export default HomePage;
