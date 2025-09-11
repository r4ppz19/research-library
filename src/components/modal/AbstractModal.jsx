import styles from "./AbstractModal.module.css";
import { useEffect } from "react";
import { X, Send } from "lucide-react";
import Button from "../button/Button";

function AbstractModal({
  isOpen,
  onClose,
  title,
  author,
  date,
  department,
  abstract,
  onDocumentRequest,
}) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={25} />
          </button>
        </div>
        <div className={styles.infoContainer}>
          <span className={styles.author}>By {author}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.departmentContainer}>
          <span className={styles.department}>{department}</span>
        </div>
        <div className={styles.abstractContainer}>
          <h3 className={styles.abstractTitle}>Abstract</h3>
          <p>{abstract}</p>
        </div>
        <Button
          className={styles.requestButton}
          onClick={onDocumentRequest}
          aria-label="Request full document"
        >
          <Send size={18} />
          Request Document
        </Button>
      </div>
    </div>
  );
}
export default AbstractModal;
