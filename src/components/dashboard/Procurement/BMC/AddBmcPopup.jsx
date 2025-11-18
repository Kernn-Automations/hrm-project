import React from "react";
import styles from "./BMCPage.module.css";
import SidePopupBox from "@/utils/SidePopupBox";
import MapFullScreenView from "./MapFullScreenView";

export default function AddBmcPopup({ btnName, btnStyling }) {
  console.log("hellp");
  return (
    <SidePopupBox
      title="Add BMC’S / CC"
      btnStyling={btnStyling}
      btnText={btnName}
    >
      <form className={styles.approvedForm} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>Plant Type : </label>
            <input type="text" />
          </div>
          <div className={styles.approvedFeild}>
            <label>Plant Code : </label>
            <input type="text" />
          </div>
        </div>

        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>Plant Name : </label>
            <input type="text" />
          </div>
          <div className={styles.approvedFeild}>
            <label>Storage Capacity : </label>
            <input type="text" />
          </div>
        </div>
        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>State : </label>
            <input type="text" />
          </div>
          <div className={styles.approvedFeild}>
            <label>District : </label>
            <input type="text" />
          </div>
        </div>
        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>Village/City/Town : </label>
            <input type="text" />
          </div>
          <div className={styles.approvedFeild}>
            <label>Pincode : </label>
            <input type="text" />
          </div>
        </div>
        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>Locate On Map : </label>
            {/* <input type="text" /> */}
            {/* <button className={styles.locateBtn}>Locate</button> */}
            <MapFullScreenView btnClass={styles.locateBtn} btnName={"Locate"} />
          </div>
        </div>

        <div className={styles.approvedActions}>
          <button type="submit" className={styles.approveBtn}>
            Create
          </button>
          <button type="button" className={styles.declineBtn}>
            Cancel
          </button>
        </div>
      </form>
    </SidePopupBox>
  );
}
