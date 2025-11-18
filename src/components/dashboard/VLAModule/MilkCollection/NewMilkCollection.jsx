import React from "react";
import styles from "./MilkCollection.module.css";

function NewMilkCollection({ navigate }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={`container-lg ${styles.form}`}>
          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Date :</label>
              <input
                type="date"
                className={styles.input}
              
              />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Time :</label>
              <input type="time" className={styles.input} />
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Center Name :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Code :</label>
              <input type="text" className={styles.input} />
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Rythu Code :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Rythu Name :</label>
              <input type="text" className={styles.input} />
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Arrival Time :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Milk Type :</label>
              <input type="text" className={styles.input} />
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Sample Number :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Quantity :</label>
              <input type="text" className={styles.input} />
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Shift :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>FAT :</label>
              <input type="text" className={styles.input} />
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>SNF :</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>CLR :</label>
              <input type="text" className={styles.input} />
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Milk Class :</label>
              <input type="text" className={styles.input} />
            </div>
          </div>

          <div className={styles.submitRow}>
            <button type="submit" className={styles.newBtn}>
              + New
            </button>
            <button type="submit" className={styles.submitBtn}>
              Save
            </button>
            <button type="button" className={styles.editBtn}>
              Print
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default NewMilkCollection;
