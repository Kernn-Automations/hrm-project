import React from "react";
import styles from "./Purchases.module.css";
import SidePopupBox from "@/utils/SidePopupBox";

function OngoingVendorsForm({ btnName, btnStyling }) {
  return (
    <>
      <SidePopupBox
        title="Ongoing Vendor"
        btnText={btnName}
        btnStyling={btnStyling}
      >
        <form className={styles.approvedForm}>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Vendor Code : </label>
              <input type="text" />
            </div>
            <div className={styles.approvedFeild}>
              <label>Vendor Name : </label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Plot : </label>
              <input type="text" />
            </div>
            <div className={styles.approvedFeild}>
              <label>Street : </label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Area : </label>
              <input type="text" />
            </div>
            <div className={styles.approvedFeild}>
              <label>Village / City : </label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>District : </label>
              <input type="text" />
            </div>
            <div className={styles.approvedFeild}>
              <label>Pincode : </label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>State : </label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.approvedActions}>
            <button type="submit" className={styles.editBtn}>
              Edit
            </button>
            <button type="submit" className={styles.declineBtn}>
              Close
            </button>
          </div>
        </form>
      </SidePopupBox>
    </>
  );
}

export default OngoingVendorsForm;
