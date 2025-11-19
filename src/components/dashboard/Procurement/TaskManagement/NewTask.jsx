import React from 'react'
import styles from './TaskManagement.module.css'


function NewTask({navigate}) {
  return (
    // 
    <>

      <p className="path">
        <span onClick={() => navigate("/tasks")}>Tasks</span>{" "}
        <i className="bi bi-chevron-right"></i> New Task
      </p>
      <div className={styles.newTaskContainer}>
        <form className={styles.newForm}>
          <div className={styles.newRow}>
            <label>Date : </label>
            <input type="date" />
          </div>


          <div className={styles.newRow}>
            <label>Time : </label>
            <input type="time" />
          </div>



          <div className={styles.newRow}>
            <label>Task to : </label>
            <select name="" id="">
              <option value="null">--select--</option>
              <option value="karthik">Karthik</option>
              <option value="Shanmukh">Shanmukh</option>
              <option value="Hari Krishna">Hari Krishna</option>
            </select>
          </div>

          <div className={styles.newRow}>
            <label>Complete Before : </label>
            <input type="text" />
          </div>




          <div className={styles.newRow}>
            <label>Subject : </label>
            <input type="text" />


          </div>

          <label>Task Description : </label>
          <textarea rows="2" />

          <div className={styles.newActions}>
            <button type="submit">Submit</button>
            {/* <button type="button" >Close</button> */}
          </div>
        </form>
      </div>
    </>
  )
}

export default NewTask
