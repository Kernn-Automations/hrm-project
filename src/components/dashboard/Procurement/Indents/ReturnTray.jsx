// src/components/ReturnTray.jsx

import React from 'react';
import SidePopupBox from '@/utils/SidePopupBox';
import styles from './ReportsPage.module.css'; // Reuse the same CSS module

export default function ReturnTray({ data, index, open, onClose }) {
  if (!data) return null;

  return (
    <SidePopupBox title="Return Details" open={open} onClose={onClose}>
      <div className={styles.drawerForm}>
        <div className={styles.formRow}>
          <label>S.No:</label>
          <input value={index + 1} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>Date:</label>
          <input value={data.date} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>BMC / CC:</label>
          <input value={data.bmc} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>By:</label>
          <input value={data.by} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>Code:</label>
          <input value={data.code} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>Name:</label>
          <input value={data.name} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>Return Qty:</label>
          <input value={data.returnQty} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>Photo:</label>
          <img src={data.photo} alt="Return Proof" width="60" height="60" style={{ borderRadius: '8px' }} />
        </div>

        <div className={styles.formRow}>
          <label>Reason:</label>
          <textarea placeholder="Enter reason here" />
        </div>

        <div className={styles.footerButtons}>
          <button type="button" className={styles.declineBtn} onClick={onClose}>Close</button>
        </div>
      </div>
    </SidePopupBox>
  );
}
