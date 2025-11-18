import SidePopupBox from "@/utils/SidePopupBox";
import React from "react";
import styles from "./ProdTab.module.css";

function ApprovalsPopup({ btnName, btnStyle }) {
  return (
    <>
      <SidePopupBox btnStyling={btnStyle} btnText={btnName} title={"Approvals"}>
        {
          <form className={styles.approvedForm}>
            <div className={styles.approvedRow}>
              <div className={styles.approvedFeild}>
                <label>Date : </label>
                <input type="date" />
              </div>
              <div className={styles.approvedFeild}>
                <label>Time : </label>
                <input type="text" />
              </div>
            </div>

             <div className={styles.approvedRow}>
              <div className={styles.approvedFeild}>
                <label>Department Name : </label>
                <input type="text" />
              </div>
              <div className={styles.approvedFeild}>
                <label>Department Code : </label>
                <input type="text" />
              </div>
            </div>

            <div className={styles.approvedRow}>
              <div className={styles.approvedFeild}>
                <label>Employee Name : </label>
                <input type="text" />
              </div>
              <div className={styles.approvedFeild}>
                <label>Empolyee ID : </label>
                <input type="text" />
              </div>
            </div>

             <div className={styles.approvedRow}>
              <div className={styles.approvedFeild}>
                <label>Milk Type : </label>
                <input type="text" />
              </div>
              <div className={styles.approvedFeild}>
                <label>Quantity(Ltr) : </label>
                <input type="text" />
              </div>
            </div>

            {/* <label>Applied For : </label>
            <input type="text" />

            <label>Reason : </label>
            <textarea rows="2" /> */}

            <div className={styles.approvedActions}>
              <button type="submit" className={styles.approveBtn}>
                Approve
              </button>
              <button type="button" className={styles.declineBtn}>
                Decline
              </button>
            </div>
          </form>
        }
      </SidePopupBox>
    </>
  );
}

export default ApprovalsPopup;
