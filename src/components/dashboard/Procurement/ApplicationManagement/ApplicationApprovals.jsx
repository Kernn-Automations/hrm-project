import React from 'react'
import styles from './Application.module.css'
import ApprovedForm from '../AttendanceManagement/ApprovedForm'
import ViewPopupForm from './ViewPopupForm'

function ApplicationApprovals() {
  return (
    <>
      <div className={styles.appContainer}>
        <table className="square-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Date</th>
              <th>Applied For</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Karthik</td>
              <td>EMP01</td>
              <td>22-11-2022</td>
              <td>Pay Slip</td>
              <td>
                {/* <button className={styles.completedButton}>View</button> */}
                {/* <ApprovedForm btnName={"view"}/> */}
                <ViewPopupForm btnName={"view"}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ApplicationApprovals
