import React from 'react';
import SidePopupBox from '@/utils/SidePopupBox';
import styles from './ApprovalsTray.module.css'; // Make sure to create and style this CSS module

export default function ApprovalsTray({
  row,
  selectedRow,
  onSelectRow
}) {
  const isThisOpen = selectedRow && selectedRow.id === row.id;

  const handleApprove = () => {
    alert(`✅ Approved leave for ${row.name}`);
    onSelectRow(null);
  };

  const handleDecline = () => {
    alert(`❌ Declined leave for ${row.name}`);
    onSelectRow(null);
  };

  return (
    <SidePopupBox
      title="Leave Status Details"
      btnText="View"
      btnStyling="view-btn"
      open={isThisOpen}
      onClose={() => onSelectRow(null)}
    >
      <form className={styles.leaveForm}>
        <div className={styles.leaveForm}>
  <div className={styles.rowGroup}>
    <div className={styles.inputGroup}>
      <label>Date:</label>
      <input type="text" value={row.date} readOnly />
    </div>
    <div className={styles.inputGroup}>
      <label>Time:</label>
      <input type="text" value={row.time || "AM"} readOnly />
    </div>
  </div>

  <div className={styles.rowGroup}>
    <div className={styles.inputGroup}>
      <label>Employee ID:</label>
      <input type="text" value={row.empId} readOnly />
    </div>
    <div className={styles.inputGroup}>
      <label>Employee Name:</label>
      <input type="text" value={row.name} readOnly />
    </div>
  </div>

  <div className={styles.inputGroup}>
    <label>Leave Type:</label>
    <input type="text" value={row.leaveType} readOnly />
  </div>

  <div className={styles.inputGroup}>
    <label>Type:</label>
    <input type="text" value={row.type} readOnly />
  </div>

  <div className={styles.inputGroup}>
    <label>From Date:</label>
    <input type="text" value={row.fromDate} readOnly />
  </div>

  <div className={styles.inputGroup}>
    <label>To Date:</label>
    <input type="text" value={row.toDate} readOnly />
  </div>

  <div className={styles.inputGroup}>
    <label>No. of Days:</label>
    <input type="text" value={row.noOfDays} readOnly />
  </div>

  <div className={styles.inputGroup}>
    <label>Reason:</label>
    <textarea value={row.reason} readOnly />
  </div>

  <div className={styles.actions}>
    <button className={styles.approve} onClick={handleApprove}>Approve</button>
    <button className={styles.decline} onClick={handleDecline}>Decline</button>
  </div>
</div>

      </form>
    </SidePopupBox>
  );
}
