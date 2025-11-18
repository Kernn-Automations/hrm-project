// src/components/IndentStatusPage.jsx

import React, { useState } from 'react';
// import IndentStatusTray from './IndentStatusTray';
// import styles from './IndentStatusPage.module.css';
import styles from '../AttendanceManagement/AttendanceForm.module.css'
import StatusForm from './StatusForm';


const indentData = [
  {
    id: 1,
    date: '2025-07-10',
    bmcscc: 'BMC01',
    by: 'John',
    store: 'Store 2',
    code: 'MAT001',
    mname: 'Cement',
    stockinhand: 50,
    reqquantity: 20,
    reason: 'Construction',
    days: 5,
    status: 'Pending'
  },
  {
    id: 2,
    date: '2025-07-08',
    bmcscc: 'CC02',
    by: 'Alice',
    store: 'Store 1',
    code: 'MAT002',
    mname: 'Steel',
    stockinhand: 30,
    reqquantity: 15,
    reason: 'Structural Work',
    days: 3,
    status: 'Approved'
  },
  {
    id: 3,
    date: '2025-07-05',
    bmcscc: 'BMC03',
    by: 'Bob',
    store: 'Main Store',
    code: 'MAT003',
    mname: 'Sand',
    stockinhand: 100,
    reqquantity: 25,
    reason: 'Flooring',
    days: 2,
    status: 'Declined'
  }
];

export default function IndentStatusPage() {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <>
      <div className={styles.tableContainer}>
        <table className="circular-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>BMC's/ CC's</th>
              <th>By</th>
              <th>Store To</th>
              <th>Material Code</th>
              <th>Material Name</th>
              <th>Stock in Hand</th>
              <th>Required Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {indentData.map((row, idx) => (
              <tr className='circular-table-row' key={row.id}>
                <td>{idx + 1}</td>
                <td>{row.date}</td>
                <td>{row.bmcscc}</td>
                <td>{row.by}</td>
                <td>{row.store}</td>
                <td>{row.code}</td>
                <td>{row.mname}</td>
                <td>{row.stockinhand}</td>
                <td>{row.reqquantity}</td>
                {/* <td>
                    <button
                    className={
                        row.status === 'Pending'
                        ? styles.pendingBtn
                        : row.status === 'Approved'
                        ? styles.approveBtn
                        : styles.declineBtn
                    }
                    onClick={() => setSelectedRow(row)}
                    >
                    {row.status}
                    </button>
                </td> */}
                <td>
                  <StatusForm btnName={row.status} btnClass={row.status === "Approved" ? styles.approveButton : row.status === "Pending" ? styles.holdButton : styles.declineButton} />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* {selectedRow && (
        <IndentStatusTray data={selectedRow} onClose={() => setSelectedRow(null)} />
      )} */}
    </>
  );
}
