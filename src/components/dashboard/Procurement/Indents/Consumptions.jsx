import React from "react";
import styles from './NewIndent.module.css';

export default function Consumptions(){
    return (
        <form className={styles.form}>
        <div className={styles.row}>
          <label className={styles.label}>Date :</label>
          <input type="date" className={styles.input} />

          <label className={styles.label}>BMC/CC :</label>
          <input type="text" className={styles.input} />

          <label className={styles.label}>Material Code :</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={styles.row}>
          <label className={styles.label}>Stock in Hand :</label>
          <input type="text" className={styles.input} />

          <label className={styles.label}>Consumption Qty :</label>
          <input type="text" className={styles.input} />
        </div>


        <div className={styles.row}>
          <label className={styles.label}>Stock in Hand :</label>
          <input type="text" className={styles.input} />

          <label className={styles.label}></label>
          {/* <input type="text" className={styles.input} placeholder="Reason :" /> */}
          <textarea rows="4" className={styles.textarea} placeholder="Reason :"></textarea>
        </div>
        
        <div className={styles.leftrow}>
          <label className={styles.label}>Consumption Type :</label>
          
          <select className={styles.input}>
            <option>-- Select --</option>
            <option>In House</option>
            <option>VLA</option>
          </select>
        </div>
        
        
        <div className={styles.submitRow}>
            
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </div>
      </form>
    );
}