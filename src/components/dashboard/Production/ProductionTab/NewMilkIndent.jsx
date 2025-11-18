import React from "react";
import styles from "./ProdTab.module.css";

function NewMilkIndent({ navigate }) {
  return (
    <>
      <form>
        <div className={`container-lg ${styles.form}`}>
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
              <label className={styles.label}>Department :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Department Code :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Employee Name :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Employee ID :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Milk Type :</label>
              <input type="text" className={styles.input} />
            </div>{" "}
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Quantity(ltr) :</label>
              <input type="text" className={styles.input} />
            </div>
          </div>
        </div>

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
          <button type="button" className={styles.cancelBtn}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default NewMilkIndent;
