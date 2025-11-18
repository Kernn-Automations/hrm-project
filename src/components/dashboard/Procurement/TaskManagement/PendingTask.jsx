import React from 'react'
import styles from './TaskManagement.module.css'
import PendingForm from './PendingForm'

function PendingTask() {
  // 
  return (
    <>
      <div className={styles.container}>
        <table className="square-table">
          <thead >
            <tr>
              <th>S.No</th>
              <th>Subject</th>
              <th>Last Date</th>
              <th>Given By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Decrease KMs in Vadlamudi BMC Routes</td>
              <td>2024-11-26</td>
              <td>Karthik</td>
              <td  className={styles.pendingBtn}>
                {/* <button>
                  Pending
                </button> */}
                <PendingForm btnName={"Pending"}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PendingTask
