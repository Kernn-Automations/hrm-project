import React from 'react';
import styles from './LeaveNavBar.module.css';

export default function LeaveNavBar({ activeTab, onTabChange }) {
  return (
    <div className={styles.leaveNavWrapper}>
      <div className={styles.leaveNav}> {/* <-- THIS DIV is critical! */}
        <span
          className={`${styles.navLink} ${activeTab === 'apply' ? styles.active : ''}`}
          onClick={() => onTabChange('apply')}
        >
          Apply for leave
        </span>
        <span
          className={`${styles.navLink} ${activeTab === 'pending' ? styles.active : ''}`}
          onClick={() => onTabChange('pending')}
        >
          Pendings
        </span>
        <span
          className={`${styles.navLink} ${activeTab === 'approvals' ? styles.active : ''}`}
          onClick={() => onTabChange('approvals')}
        >
          Approvals
        </span>
      </div>
    </div>
  );
}
