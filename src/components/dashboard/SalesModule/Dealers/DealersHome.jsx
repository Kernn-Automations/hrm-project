import React from "react";
import styles from '../../../dashboard/Procurement/LeaveManagement/ApplyLeaveForm.module.css'

const DealersHome = () => {
  return (
    <form className={styles.formGrid}>
      {/* Left column */}
      <div className={styles.leftCol}>
        <div className={styles.formRow}>
          <label>Vender Code :</label>
          <input
            type="text"
            readOnly
          // value={new Date().toLocaleDateString('en-US', {
          //   month: '2-digit',
          //   day: '2-digit',
          //   year: 'numeric',
          // })}
          />
        </div>

        <div className={styles.formRow}>
          <label>First Name :</label>
          <input type="text" placeholder="" />
        </div>
        <div className={styles.formRow}>
          <label>Last Name :</label>
          <input type="text" placeholder="" />
        </div>
        <div className={styles.formRow}>
          <label>Surname :</label>
          <input type="text" placeholder="" />
        </div>

      </div>

      {/* Right column */}
      <div className={styles.rightCol}>
        <div className={styles.formRow}>
          <label>Enterprice Name :</label>
          <input
            type="text"
            // readOnly
            // Value={new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
          />
        </div>

        <div className={styles.formRow}>
          <label>
            {/* Employee <br /> Name : */}
            Mobile Number :
          </label>
          <input type="text" placeholder="" />
        </div>
        <div className={styles.formRow}>
          <label>
            {/* Employee <br /> Name : */}
            Email ID :
          </label>
          <input type="text" placeholder="" />
        </div>
      </div>

      {/* Reason full width below, NO label, only placeholder */}

      <button className={styles.submitBtn}>Submit</button>
      
    </form>
  );
};

export default DealersHome;
