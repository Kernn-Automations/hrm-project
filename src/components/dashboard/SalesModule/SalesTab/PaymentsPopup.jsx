import SidePopupBox from "@/utils/SidePopupBox";
import React from "react";
import styles from "./Sales.module.css";

function PaymentsPopup({ btnName, btnStyling, rowData }) {
  return (
    <>
      <SidePopupBox title="Payments" btnText={btnName} btnStyling={btnStyling}>
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
              <label>Transaction ID: </label>
              <input type="text" value={rowData?.["Transaction ID"] || ''} readOnly />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Net Amount : </label>
              <input type="text" value={rowData?.["Net Amount"] || ''} readOnly />
            </div>
            <div className={styles.approvedFeild}>
              <label>Payment Type : </label>
              <input type="text" value={rowData?.["Payment Type"] || ''} readOnly />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Payment Status : </label>
              <input type="text" value={rowData?.["Payment Status"] || ''} readOnly />
            </div>
            <div className={styles.approvedFeild}>
              <label>Payment Date : </label>
              <input type="text" value="" readOnly />
            </div>
          </div>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Indent ID : </label>
              <input type="text" value={rowData?.["Indent ID"] || ''} readOnly />
            </div>
          </div>

          <div className={styles.approvedActions}>
            <button type="submit" className={styles.approveBtn}>
              Download Receipt
            </button>
            <button type="button" className={styles.declineBtn}>
              Close
            </button>
          </div>
        </form>
      </SidePopupBox>
    </>
  );
}

export default PaymentsPopup;
