import React from "react";
import styles from "./Reimbursement.module.css";

function NewReimbursement() {
  return (
    <>
      <div className={`container-lg ${styles.form}`}>
        <div className={`row m-0 p-0 ${styles.formRow}`}>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label} htmlFor="">
              Date :
            </label>
            <input className={styles.input} type="date" />
          </div>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label} htmlFor="">
              Time :
            </label>
            <input className={styles.input} type="text" />
          </div>
        </div>

        <div className={`row m-0 p-0 ${styles.formRow}`}>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label} htmlFor="">
              Employee ID :
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label} htmlFor="">
              Employee Name :
            </label>
            <input className={styles.input} type="text" />
          </div>
        </div>

        <div className={`row m-0 p-0 ${styles.formRow}`}>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label} htmlFor="">
              Department :
            </label>
            <input className={styles.input} type="text" />
          </div>
        </div>
        <h5 className={styles.head}>Expenditure</h5>
        <div className={`row m-0 p-0 ${styles.formRow}`}>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label} htmlFor="">
              Date :
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label} htmlFor="">
              Amount :
            </label>
            <input className={styles.input} type="text" />
          </div>
        </div>

        <div className={`row m-0 p-0 ${styles.formRow}`}>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label} htmlFor="">
              Subject :
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label} htmlFor="">
              Description :
            </label>
            <textarea className={styles.textarea} name="" id=""></textarea>
          </div>
        </div>
        <div className={`row m-0 p-0 ${styles.formRow}`}></div>
        <div className={`row m-0 p-0 ${styles.formRow}`}>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label} htmlFor="">
              Documents :
            </label>
            <button className={styles.uploadFile} type="button">
              Upload
            </button>
          </div>
        </div>

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submitBtn}>
            Create
          </button>
          <button type="button" className={styles.cancelBtn}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default NewReimbursement;
