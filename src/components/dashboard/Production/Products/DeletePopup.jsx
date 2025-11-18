// src/components/DeleteBmcPopup.jsx

import React, { useRef } from "react";
import SidePopupBox from "@/utils/SidePopupBox";
import styles from "./Products.module.css";
import CentralPopupBox from "@/utils/CentralPopupBox";

export default function DeletePopup({ btnName, btnStyling }) {
  const popupRef = useRef();

  const handleNoClick = () => {
    popupRef.current.closePopup(); // Close from child
  };

  return (
    <SidePopupBox
      title="Delete Product"
      btnText={btnName}
      btnStyling={btnStyling}
    >
      <div className={styles.deleteContainer}>
        {/* <label className={styles.dropdownLabel}>-- select BMC’S / CC--</label> */}
        <select className={styles.dropdown}>
          <option value="">-- Select Product --</option>
          <option value="bmc1">Product 1</option>
          <option value="bmc2">Product 2</option>
          <option value="bmc3">Product 3</option>
        </select>

        <div className={styles.actions}>
          <button className={styles.closeBtn} >
            Close
          </button>
          {/* <button className={styles.deleteBtn}>Delete</button> */}
          <CentralPopupBox
            btnName={"Delete"}
            btnClass={styles.deleteBtn}
            ref={popupRef}
          >
            <p className={styles.popText}>
              Are you sure, you want to delete
            </p>
            <button className={styles.yesButton}>Yes</button>
            <button className={styles.noButton} onClick={handleNoClick}>
              NO
            </button>
          </CentralPopupBox>
        </div>
      </div>
    </SidePopupBox>
  );
}
