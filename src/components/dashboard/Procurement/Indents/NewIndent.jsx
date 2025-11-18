import React from "react";
import styles from './NewIndent.module.css';

export default function NewIndent(){
    return (
        <form className={styles.form}>
        <div className={styles.row}>
          <label className={styles.label}>Date :</label>
          <input type="date" className={styles.input} />

          <label className={styles.label}>Time :</label>
          <input type="time" className={styles.input} readOnly
            Value={new Date().toLocaleTimeString( 'en-GB',{ hour: '2-digit', minute: '2-digit' })}/>

          <label className={styles.label}>By :</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={styles.row}>
          <label className={styles.label}>Stored to :</label>
          <input type="text" className={styles.input} />

          <label className={styles.label}>Material Code :</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={`${styles.row} ${styles.single}`}>
          <label className={styles.label}>Material Name :</label>
          <input type="text" className={`${styles.input} ${styles.fullWidth}`} />
        </div>

        <div className={styles.row}>
          <label className={styles.label}>Stock in Hand :</label>
          <input type="text" className={styles.input} />

          <label className={styles.label}></label>
          {/* <input type="text" className={styles.input} placeholder="Reason :" /> */}
          <textarea rows="4" className={styles.textarea} placeholder="Reason :"></textarea>
        </div>
        
        <div className={styles.leftrow}>
          <label className={styles.label}>Required Quantity :</label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.leftrow}>
          <label className={styles.label}>No of Days :</label>
          <input type="text" className={styles.input} />
          {/* <textarea rows="4" className={styles.textarea}></textarea> */}
        </div>
        
        <div className={styles.submitRow}>
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </div>
      </form>
    );
}