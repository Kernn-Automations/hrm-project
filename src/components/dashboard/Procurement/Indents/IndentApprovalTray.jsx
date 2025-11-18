// src/components/IndentTray.jsx

import React from 'react';
import SidePopupBox from '@/utils/SidePopupBox';
import styles from '../AttendanceManagement/AttendanceForm.module.css'

export default function IndentApprovalTray({ data, open, onClose, btnName }) {
  if (!data) return null;

  return (
    <SidePopupBox title="Approve / Decline" open={open} onClose={onClose}>

      {/* 
      <form className={styles.drawerForm}>
        <div className={styles.formRow}>
          <label>Date:</label>
          <input value={data.date} readOnly />
        </div>
        <div className={styles.formRow}>
          <label>BMC's / CC's:</label>
          <input value={data.bmcscc} readOnly />
        </div>
        <div className={styles.formRow}>
          <label>By:</label>
          <input value={data.by} readOnly />
        </div>
        <div className={styles.formRow}>
          <label>Store to:</label>
          <input value={data.store} readOnly />
        </div>
        <div className={styles.formRow}>
          <label>Material code:</label>
          <input value={data.code} readOnly />
        </div>
        <div className={styles.formRow}>
          <label>Material Name:</label>
          <input value={data.mname} readOnly />
        </div>
        <div className={styles.formRow}>
          <label>Stock in Hand:</label>
          <input value={data.stockinhand} readOnly />
        </div>
        <div className={styles.formRow}>
          <label>Required Quantity:</label>
          <input value={data.reqquantity} readOnly />
        </div>
        <div className={styles.formRow}>
          <label>Required in Days:</label>
          <input placeholder="Enter days" />
        </div>
        <div className={styles.formRow}>
          <label>Reason:</label>
          <textarea placeholder="Enter reason" />
        </div>
        <div className={styles.footertrayButtons}>
          <button type="button" className={styles.approvetrayBtn}>Approve</button>
          <button type="button" className={styles.declinetrayBtn}>Decline</button>
        </div>
      </form> */}


      {<form className={styles.approvedForm}>
        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>Date : </label>
            <input type="date" />
          </div>
          <div className={styles.approvedFeild}>
            <label>BMC's / CC's </label>
            <input type="text" />
          </div>

        </div>


        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>By : </label>
            <input type="text" />
          </div>
          <div className={styles.approvedFeild}>
            <label>Store to : </label>
            <input type="text" />
          </div>

        </div>
        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>Material Code : </label>
            <input type="text" />
          </div>
          <div className={styles.approvedFeild}>
            <label>Material Name : </label>
            <input type="text" />
          </div>

        </div>
        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>Stock in Hand : </label>
            <input type="text" />
          </div>
          <div className={styles.approvedFeild}>
            <label>Required Quantity: </label>
            <input type="text" />
          </div>

        </div>
        <label>Required in Days : </label>
        <input type="text" />

        <label>Reason : </label>
        <textarea rows="2" />

        <div className={styles.approvedActions}>
          {/* <button type="submit" className={styles.approveBtn}>Approve</button>
                                         <button type="button" className={styles.declineBtn}>Decline</button> */}

          {btnName === "Pending" && <button type="button" className={styles.editButton}>Edit</button>}
        </div>
      </form>}



    </SidePopupBox>
  );
}
