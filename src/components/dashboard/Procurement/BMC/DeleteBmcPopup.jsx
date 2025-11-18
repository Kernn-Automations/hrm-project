// src/components/DeleteBmcPopup.jsx

import React, { useRef } from "react";
import SidePopupBox from "@/utils/SidePopupBox";
import styles from "./DeleteBmcPopup.module.css";
import CentralPopupBox from "@/utils/CentralPopupBox";

export default function DeleteBmcPopup({ btnStyling, btnName }) {
  const popupRef = useRef();

  const handleNoClick = () => {
    popupRef.current.closePopup(); // Close from child
  };

  return (
    <CentralPopupBox
      title="Delete BMC’S / CC"
      btnClass={btnStyling}
      btnName={btnName}
      ref={popupRef}
    >
      <div className={styles.deleteContainer}>
        <h5 style={{textAlign: "left", width: "100%"}}>Select BMC to Delete :</h5>
        {/* <label className={styles.dropdownLabel}>-- select BMC’S / CC--</label> */}
        <select className={styles.dropdown}>
          <option value="">-- select BMC’S / CC--</option>
          <option value="bmc1">BMC 1</option>
          <option value="bmc2">BMC 2</option>
          <option value="bmc3">BMC 3</option>
        </select>

        <div className={styles.actions}>
          <button className={styles.closeBtn} onClick={handleNoClick}>
            Close
          </button>
          <button className={styles.deleteBtn}>Delete</button>
        </div>
      </div>
    </CentralPopupBox>
  );
}
