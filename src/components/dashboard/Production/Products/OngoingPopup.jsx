import React from "react";
import styles from "./Products.module.css";
import SidePopupBox from "@/utils/SidePopupBox";

function OngoingPopup({ btnName, btnStyling }) {
  return (
    <>
      <SidePopupBox
        title="Delete Product"
        btnText={btnName}
        btnStyling={btnStyling}
      >
        <form className={styles.approvedForm}>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Product SKU : </label>
              <input type="text" />
            </div>
            <div className={styles.approvedFeild}>
              <label>Product Name </label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Category : </label>
              <input type="text" />
            </div>
            <div className={styles.approvedFeild}>
              <label>Units : </label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Product Type : </label>
              <input type="text" />
            </div>
            <div className={styles.approvedFeild}>
              <label>Sales Price : </label>
              <input type="text" />
            </div>
          </div>

          {/* <div className={styles.approvedRow}> */}
            <label htmlFor="">Description :</label>
            <textarea name="" id=""></textarea>
          {/* </div> */}

          {/* <label>Applied For : </label>
                    <input type="text" />
        
                    <label>Reason : </label>
                    <textarea rows="2" /> */}

          <div className={styles.approvedActions}>
            <button type="submit" className={styles.editBtn}>
              Edit
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

export default OngoingPopup;
