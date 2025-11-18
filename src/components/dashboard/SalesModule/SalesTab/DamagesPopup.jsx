import React from "react";
import styles from "./Sales.module.css";
import SidePopupBox from "@/utils/SidePopupBox";

function DamagesPopup({ btnName, btnStyling, rowData }) {
  return (
    <>
      <SidePopupBox
        title="Damaged Products"
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
              <label>No.of Damaged Products : </label>
              <input type="text" value={rowData?.No?.["of Damaged Products"] || ''} readOnly />
            </div>
          </div>

          <h6 className={styles.head}>Damaged Products</h6>
          <div className="d-flex p-3 pt-0 w-100">
            <table className={`w-100 ${styles.table}`}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product 1</td>
                  <td>50kgs</td>
                  <td>
                    <button className={styles.viewbtn}>view</button>
                  </td>
                </tr>
                <tr>
                  <td>Product 1</td>
                  <td>50kgs</td>
                  <td>
                    <button className={styles.viewbtn}>view</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className={styles.approvedActions}>
            <button type="submit" className={styles.approveBtn}>
              Approve
            </button>
            <button type="button" className={styles.declineBtn}>
              Decline
            </button>
          </div> */}
        </form>
      </SidePopupBox>
    </>
  );
}

export default DamagesPopup;
