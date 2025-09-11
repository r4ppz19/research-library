import { useState } from "react";
import { ChevronDown } from "lucide-react";
import style from "./FilterButton.module.css";
import Button from "../button/Button";

function FilterButton({ departments, years, onFilter }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedDept, setSelectedDept] = useState("All departments");
  const [selectedYear, setSelectedYear] = useState("All year");

  const handleDeptSelect = (dept) => {
    setSelectedDept(dept);
    setOpenDropdown(null);
    onFilter({ department: dept, year: selectedYear });
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setOpenDropdown(null);
    onFilter({ department: selectedDept, year });
  };

  const toggleDeptDropdown = () => {
    setOpenDropdown(openDropdown === "dept" ? null : "dept");
  };

  const toggleYearDropdown = () => {
    setOpenDropdown(openDropdown === "year" ? null : "year");
  };

  return (
    <div className={style.filterSection}>
      {/* Department Filter */}
      <div className={style.departmentWrapper}>
        <Button onClick={toggleDeptDropdown} className={style.filterButton}>
          {selectedDept} <ChevronDown size={18} />
        </Button>
        {openDropdown === "dept" && (
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
      <div className={style.yearWrapper}>
        <Button onClick={toggleYearDropdown} className={style.filterButton}>
          {selectedYear} <ChevronDown size={18} />
        </Button>
        {openDropdown === "year" && (
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

export default FilterButton;
