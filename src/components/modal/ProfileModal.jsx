import { useEffect } from "react";
import style from "./ProfileModal.module.css";
import { X, Send } from "lucide-react";
import Button from "../button/Button";

function ProfileModal({ onClose, isOpen }) {
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

  const requests = [
    {
      id: 1,
      title: "Quantum Computing in Cryptography",
      status: "Accepted",
      action: "Download",
    },
    {
      id: 2,
      title: "Artificial Intelligence in Education",
      status: "Pending",
      action: "N/A",
    },
  ];

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <div className={style.header}>
          <h1 className={style.title}>My Profile</h1>
          <button
            className={style.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={25} />
          </button>
        </div>
        <div className={style.studentInfoContainer}>
          <div className={style.infoRow}>
            <div className={style.infoContainer}>
              <h3 className={style.infoHeader}>Name</h3>
              <p className={style.info}>John Rey Rabosa</p>
            </div>
            <div className={style.infoContainer}>
              <h3 className={style.infoHeader}>ID</h3>
              <p className={style.info}>2021-00123-DCS</p>
            </div>
          </div>
          <div className={style.infoRow}>
            <div className={style.infoContainer}>
              <h3 className={style.infoHeader}>Department</h3>
              <p className={style.info}>BSIT</p>
            </div>
            <div className={style.infoContainer}>
              <h3 className={style.infoHeader}>Year Level</h3>
              <p className={style.info}>2nd Year</p>
            </div>
          </div>
        </div>

        <div className={style.subheader}>
          <h2 className={style.tableHeader}>My Document Request</h2>
        </div>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Paper title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td data-label="Paper title">{req.title}</td>
                <td data-label="Status">{req.status}</td>
                <td data-label="Action">
                  {req.status === "Accepted" ? (
                    <Button className={style.actionButton}>Download</Button>
                  ) : (
                    <span className={style.pending}>Nuh uh</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfileModal;
