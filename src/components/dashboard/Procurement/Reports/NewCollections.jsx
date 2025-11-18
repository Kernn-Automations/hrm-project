import React from "react";
import styles from "./Reports.module.css";
function NewCollections({ navigate }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={`container-lg ${styles.form}`}>
          <button className={`${styles.newbutton}`}>+ New</button>
          <div className={` row m-0 p-3 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Date :</label>
              <input type="date" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Time :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>BMC :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Shift :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Route Code :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Vechile Number :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Arrival Time :</label>
              <input type="text" className={styles.input} />
            </div>{" "}
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Center Code :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Milk Type :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Sample Number :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>No.of Cans :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Quantity :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Fat :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>SNF :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>CLR :</label>
              <input type="text" className={styles.input} />
            </div>{" "}
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Milk Class :</label>
              <input type="text" className={styles.input} />
            </div>
          </div>
        </div>

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default NewCollections;
