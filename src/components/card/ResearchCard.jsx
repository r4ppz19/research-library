import { useState } from "react";
import style from "./ResearchCard.module.css";
import Button from "../button/Button.jsx";
import AbstractModal from "../modal/AbstractModal.jsx";
import { Eye } from "lucide-react";

function ResearchCard({ title, author, date, department, abstract }) {
  const [isOpen, setIsOpen] = useState(false);
  const preview =
    abstract.length > 150 ? abstract.substring(0, 150) + "..." : abstract;

  return (
    <div className={style.card}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.infoContainer}>
        <p className={style.author}>By {author}</p>
        <p className={style.date}>{date}</p>
      </div>
      <div className={style.departmentContainer}>
        <p className={style.department}>{department}</p>
      </div>
      <p className={style.abstract}>{preview}</p>
      <Button className={style.readButton} onClick={() => setIsOpen(true)}>
        <Eye size={18} />
        Read Abstract
      </Button>

      <AbstractModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        author={author}
        date={date}
        department={department}
        abstract={abstract}
        onDocumentRequest={() => console.log("Request document")}
      />
    </div>
  );
}

export default ResearchCard;
