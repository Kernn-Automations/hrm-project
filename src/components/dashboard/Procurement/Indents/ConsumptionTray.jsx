// src/components/ConsumptionTray.jsx

import React from 'react';
import SidePopupBox from '@/utils/SidePopupBox';
import styles from './ReportsPage.module.css'; // Reuse or create a new CSS module if needed

export default function ConsumptionTray({ data, open, onClose }) {
  if (!data) return null;

  return (
    <SidePopupBox title="Consumption Details" open={open} onClose={onClose}>
      <form className={styles.drawerForm}>
        <div className={styles.formRow}>
          <label>Date:</label>
          <input value={data.date} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>BMC / CC:</label>
          <input value={data.bmccc} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>Material Code:</label>
          <input value={data.code} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>Material Name:</label>
          <input value={data.name} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>Stock in Hand:</label>
          <input value={data.inHand} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>Consumption Qty:</label>
          <input value={data.consumptionQty} readOnly />
        </div>

        <div className={styles.formRow}>
          <label>Consumption Type:</label>
          <select defaultValue="">
            <option value="" disabled>-- Select --</option>
            <option value="Regular">Regular</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <label>Reason:</label>
          <textarea placeholder="Enter reason here" />
        </div>

        <div className={styles.footerButtons}>
          <button type="submit" className={styles.approvetrayBtn}>Submit</button>
          <button type="button" className={styles.declinetrayBtn} onClick={onClose}>Cancel</button>
        </div>
      </form>
    </SidePopupBox>
  );
}
