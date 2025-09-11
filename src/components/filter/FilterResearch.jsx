import { useState } from "react";
import { ChevronDown } from "lucide-react";
import style from "./FilterResearch.module.css";
import Button from "../button/Button";

function FilterResearch({ departments, years, onFilter }) {
  const [deptOpen, setDeptOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState("All departments");
  const [selectedYear, setSelectedYear] = useState("All year");

  const handleDeptSelect = (dept) => {
    setSelectedDept(dept);
    setDeptOpen(false);
    onFilter({ department: dept, year: selectedYear });
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setYearOpen(false);
    onFilter({ department: selectedDept, year });
  };

  return (
    <div className={style.filterSection}>
      {/* Department Filter */}
      <div className={style.dropdownWrapper}>
        <Button
          onClick={() => setDeptOpen((prev) => !prev)}
          className={style.filterButton}
        >
          {selectedDept} <ChevronDown size={18} />
        </Button>
        {deptOpen && (
          <ul className={style.dropdownMenu}>
            <li onClick={() => handleDeptSelect("All departments")}>
              All departments
            </li>
            {departments.map((dept) => (
              <li key={dept} onClick={() => handleDeptSelect(dept)}>
                {dept}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Year Filter */}
      <div className={style.dropdownWrapper}>
        <Button
          onClick={() => setYearOpen((prev) => !prev)}
          className={style.filterButton}
        >
          {selectedYear} <ChevronDown size={18} />
        </Button>
        {yearOpen && (
          <ul className={style.dropdownMenu}>
            <li onClick={() => handleYearSelect("All year")}>All year</li>
            {years.map((year) => (
              <li key={year} onClick={() => handleYearSelect(year)}>
                {year}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FilterResearch;
