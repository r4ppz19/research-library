import { useState, useEffect, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import style from "./StudentDashboard.module.css";
import Header from "../../components/header/Header";
import TextField from "../../components/form/TextField";
import ResearchCard from "../../components/card/ResearchCard";
import DropdownFilterButton from "../../components/filter/DropdownFilterButton";
import dummyResearch from "../../dummy/dummy-research";
import Button from "../../components/button/Button";

const ITEMS_PER_PAGE = 9;
const DEFAULT_FILTERS = { department: "All departments", year: "All year" };

function HomePage() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 whenever filters/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, search]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const departments = useMemo(
    () => [...new Set(dummyResearch.map((p) => p.department))],
    [],
  );

  const years = useMemo(
    () =>
      [...new Set(dummyResearch.map((p) => p.date.split(" ").pop()))].sort(),
    [],
  );

  const filteredResearch = useMemo(() => {
    const lowerSearch = search.toLowerCase();

    return dummyResearch.filter((paper) => {
      const paperYear = paper.date.split(" ").pop();

      const matchesDepartment =
        filters.department === "All departments" ||
        paper.department === filters.department;

      const matchesYear =
        filters.year === "All year" || paperYear === filters.year;

      const matchesSearch =
        paper.title.toLowerCase().includes(lowerSearch) ||
        paper.author.toLowerCase().includes(lowerSearch) ||
        paper.department.toLowerCase().includes(lowerSearch) ||
        paper.abstract.toLowerCase().includes(lowerSearch);

      return matchesDepartment && matchesYear && matchesSearch;
    });
  }, [filters, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredResearch.length / ITEMS_PER_PAGE),
  );

  const paginatedResearch = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredResearch.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredResearch, currentPage]);

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "next" && prev < totalPages) return prev + 1;
      if (direction === "prev" && prev > 1) return prev - 1;
      return prev;
    });
  };

  return (
    <div
      className={style.page}
      style={{ paddingTop: menuOpen ? "200px" : "100px" }}
    >
      <Header menuOpen={menuOpen} toggleMenu={() => setMenuOpen((v) => !v)} />

      <main className={style.main}>
        <section className={style.heroSection}>
          <h1 className={style.header}>Discover Academic Research</h1>
          <p className={style.text}>
            Explore a collection of student and faculty research papers,
            spanning multiple departments and years. Search, filter, and access
            innovative work that pushes the boundaries of knowledge.
          </p>
        </section>

        <section className={style.searchSection}>
          <TextField
            className={style.textField}
            placeholder="Search research paper"
            icon={<Search size={20} />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <DropdownFilterButton
            departments={departments}
            years={years}
            onFilter={setFilters}
          />
        </section>

        <section className={style.researchSection}>
          {paginatedResearch.length > 0 ? (
            paginatedResearch.map((paper) => (
              <ResearchCard key={paper.id} {...paper} />
            ))
          ) : (
            <p>No research paper found!</p>
          )}
        </section>

        {totalPages > 1 && (
          <section className={style.paginationSection}>
            <Button
              className={style.paginationButton}
              onClick={() => handlePageChange("prev")}
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
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              Next
              <ChevronRight size={18} />
            </Button>
          </section>
        )}
      </main>
    </div>
  );
}

export default HomePage;
