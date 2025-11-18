import SidePopupBox from "@/utils/SidePopupBox";
import React from "react";
import styles from "./Sales.module.css";

function IndentsPopup({ btnName, btnStyling, rowData }) {
  return (
    <>
      <SidePopupBox
        title="Indents"
        btnText={btnName}
        btnStyling={btnStyling}
      >
        <form className={styles.approvedForm}>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Date : </label>
              <input type="text" value={rowData?.["Date"] || ''} readOnly />
            </div>
            <div className={styles.approvedFeild}>
              <label>Vendor Name : </label>
              <input type="text" value={rowData?.["Vendor Name"] || ''} readOnly />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Vendor Code : </label>
              <input type="text" value={rowData?.["Vendor Code"] || ''} readOnly />
            </div>
            <div className={styles.approvedFeild}>
              <label>Mobile Number : </label>
              <input type="text" value={rowData?.["Mobile Number"] || ''} readOnly />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Net Amount : </label>
              <input type="text" value={rowData?.["Amount"] || ''} readOnly />
            </div>
            <div className={styles.approvedFeild}>
              <label>Payment Status : </label>
              <input type="text" value={rowData?.["Payment Status"] || ''} readOnly />
            </div>
          </div>

          <h6 className={styles.head}>Indents</h6>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Product Name : </label>
              <input type="text" value="" readOnly />
            </div>
            <div className={styles.approvedFeild}>
              <label>Quantity : </label>
              <input type="text" value="" readOnly />
            </div>
          </div>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Product Name : </label>
              <input type="text" value="" readOnly />
            </div>
            <div className={styles.approvedFeild}>
              <label>Quantity : </label>
              <input type="text" value="" readOnly />
            </div>
          </div>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Product Name : </label>
              <input type="text" value="" readOnly />
            </div>
            <div className={styles.approvedFeild}>
              <label>Quantity : </label>
              <input type="text" value="" readOnly />
            </div>
          </div>

          <div className={styles.approvedActions}>
            <button type="submit" className={styles.approveBtn}>
              Approve
            </button>
            <button type="button" className={styles.declineBtn}>
              Decline
            </button>
          </div>
        </form>
      </SidePopupBox>
    </>
  );
}

export default IndentsPopup;
