// components/DeletePopupBox.jsx
import React from "react";
import CentralPopupBox from "@/utils/CentralPopupBox"; // adjust path as needed
import styles from "./DeleteContract.module.css";// optional for custom styles

const DeletePopupBox = React.forwardRef(({ itemName, onConfirm }, ref) => {
  return (
    <CentralPopupBox ref={ref} btnName="Delete" btnClass={styles.deleteBtn}>
      <div className={styles.popupContent}>
        <p>
          Are you sure you want to delete <strong>{itemName}</strong>?
        </p>
        <div className={styles.popupActions}>
          <button onClick={onConfirm} className={styles.confirmBtn}>
            Yes, Delete
          </button>
          <button
            onClick={() => ref.current?.closePopup()}
            className={styles.cancelBtn}
          >
            Cancel
          </button>
        </div>
      </div>
    </CentralPopupBox>
  );
});

export default DeletePopupBox;
