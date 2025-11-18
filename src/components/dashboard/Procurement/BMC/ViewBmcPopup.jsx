import React, { useState, useEffect } from "react";
import SidePopupBox from "@/utils/SidePopupBox";
import styles from "./BMCPage.module.css"

export default function ViewBmcPopup({ btnName, btnStyling}) {
 

  return (
    <SidePopupBox title="View BMC’S / CC" btnStyling={btnStyling} btnText={btnName}>


      {<form className={styles.approvedForm}>
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


        <label>Reason : </label>
        <textarea rows="2" />

        <div className={styles.approvedActions}>
          {/* <button type="submit" className={styles.approveBtn}>Approve</button>
                                   <button type="button" className={styles.declineBtn}>Decline</button> */}

         <button type="button" className={styles.editButton}>Edit</button>
        </div>
      </form>}

    </SidePopupBox>
  );
}
