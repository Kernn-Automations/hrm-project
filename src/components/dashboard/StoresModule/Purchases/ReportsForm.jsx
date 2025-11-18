import SidePopupBox from "@/utils/SidePopupBox";
import React from "react";
import styles from "./Purchases.module.css";

function ReportsForm({ btnName, btnStyling }) {
  return (
    <>
      <SidePopupBox
        title="Purchase Order"
        btnText={btnName}
        btnStyling={btnStyling}
      >
        <form className={styles.approvedForm}>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Date : </label>
              <input type="text" />
            </div>
            <div className={styles.approvedFeild}>
              <label>Time : </label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Warehouse : </label>
              <input type="text" />
            </div>
            <div className={styles.approvedFeild}>
              <label>Purchase ID : </label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Vendor Name : </label>
              <input type="text" />
            </div>
            <div className={styles.approvedFeild}>
              <label>Vebdor ID : </label>
              <input type="text" />
            </div>
          </div>

          {/* <div className={styles.approvedRow}> */}
          <label htmlFor="">Address :</label>
          <textarea name="" id=""></textarea>
          {/* </div> */}

          <h6 className={styles.head}>Products</h6>

          <div className="d-flex p-3 pt-0 w-100">
            <table className={`w-100 ${styles.table}`}>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Units</th>
                  <th>Quantity</th>
                  <th>Net Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SKU3344</td>
                  <td>Product 1</td>
                  <td>kg</td>
                  <td>50</td>
                  <td>1200</td>
                </tr>
                <tr>
                  <td>SKU3344</td>
                  <td>Product 1</td>
                  <td>kg</td>
                  <td>50</td>
                  <td>1200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.approvedActions}>
            <button type="submit" className={styles.approveBtn}>
              Preview PDF
            </button>
           
          </div>
        </form>
      </SidePopupBox>
    </>
  );
}

export default ReportsForm;
