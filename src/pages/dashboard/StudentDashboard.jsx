import { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import style from "./StudentDashboard.module.css";
import Header from "../../components/header/Header";
import TextField from "../../components/form/TextField";
import ResearchCard from "../../components/card/ResearchCard";
import FilterResearch from "../../components/filter/FilterResearch";
import dummyResearch from "../../dummy/dummy-research";
import Button from "../../components/button/Button";

function HomePage() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filters, setFilters] = useState({
    department: "All departments",
    year: "All year",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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

  const totalPages = Math.ceil(filteredResearch.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResearch = filteredResearch.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main
      className={style.page}
      style={{ paddingTop: menuOpen ? "200px" : "100px" }}
    >
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <section className={style.heroSection}>
        <h1 className={style.header}>Discover Academic Research</h1>
        <p className={style.text}>
          Explore a collection of student and faculty research papers, spanning
          multiple departments and years. Search, filter, and access innovative
          work that pushes the boundaries of knowledge.
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
        {paginatedResearch.length > 0 ? (
          paginatedResearch.map((paper) => (
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
          <p>No research paper found!</p>
        )}
      </section>

      {totalPages > 1 && (
        <section className={style.paginationSection}>
          <Button
            className={style.paginationButton}
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
            Previous
          </Button>
          <span className={style.pageInfo}>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            className={style.paginationButton}
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            Next
            <ChevronRight size={18} />
          </Button>
        </section>
      )}
    </main>
  );
}

export default HomePage;
