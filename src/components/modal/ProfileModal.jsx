import { useEffect } from "react";
import style from "./ProfileModal.module.css";
import { X, Download } from "lucide-react";
import Button from "../button/Button";

function ProfileModal({ onClose, isOpen, student }) {
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
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <div className={style.header}>
          <h1 className={style.title}>Profile</h1>
          <button
            className={style.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={25} />
          </button>
        </div>
        <div className={style.studentInfoContainer}>
          <div className={style.infoColumn}>
            <div className={style.infoGroup}>
              <h3 className={style.infoHeader}>Name</h3>
              <p className={style.info}>{student.name}</p>
            </div>
            <div className={style.infoGroup}>
              <h3 className={style.infoHeader}>ID</h3>
              <p className={style.info}>{student.id}</p>
            </div>
          </div>
          <div className={style.infoColumn}>
            <div className={style.infoGroup}>
              <h3 className={style.infoHeader}>Department</h3>
              <p className={style.info}>{student.department}</p>
            </div>
            <div className={style.infoGroup}>
              <h3 className={style.infoHeader}>Year Level</h3>
              <p className={style.info}>{student.yearLevel}</p>
            </div>
          </div>
        </div>

        <div className={style.subheader}>
          <h2 className={style.tableHeader}>Document Request</h2>
        </div>
        <div className={style.tableWrapper}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Paper title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {student.requests.map((req) => (
                <tr key={req.id}>
                  <td data-label="Paper title">{req.title}</td>
                  <td data-label="Status">
                    <span
                      className={
                        req.status === "Pending"
                          ? style.pending
                          : req.status === "Rejected"
                            ? style.rejected
                            : req.status === "Accepted"
                              ? style.accepted
                              : ""
                      }
                    >
                      {req.status}
                    </span>
                  </td>
                  <td data-label="Action">
                    {req.status === "Accepted" ? (
                      <Button className={style.actionButton}>
                        <Download size={14} />
                        Download
                      </Button>
                    ) : req.status === "Pending" ? (
                      <span>Pending</span>
                    ) : req.status === "Rejected" ? (
                      <span>Rejected</span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
