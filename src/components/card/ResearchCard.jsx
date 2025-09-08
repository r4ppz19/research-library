import style from "./ResearchCard.module.css";
import Button from "../button/Button.jsx";
import { Eye } from "lucide-react";

function ResearchCard() {
  return (
    <div className={style.card}>
      <h1 className={style.title}>
        Quantum Computing Applications in Cryptography
      </h1>
      <div className={style.infoContainer}>
        <p className={style.author}>By Dr. Eleanor Chen</p>
        <p className={style.date}>March 22, 2023</p>
      </div>
      <div className={style.departmentContainer}>
        <p className={style.department}>Computer Science</p>
      </div>
      <p className={style.abstract}>
        Quantum computing has emerged as a disruptive technology with the
        potential to transform modern cryptography. Traditional encryption...
      </p>
      <Button icon={<Eye />} padding="8px 10px">
        Read Abstract
      </Button>
    </div>
  );
}

export default ResearchCard;
