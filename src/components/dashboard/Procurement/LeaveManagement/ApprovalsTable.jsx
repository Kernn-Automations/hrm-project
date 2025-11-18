import React, { useState } from 'react';
import ApprovalsTray from './ApprovalsTray';
import styles from './ApprovalsTray.module.css'

const approvedRows = [
  {
    id: 1,
    empId: 'KA0045',
    name: 'Karthik',
    mobile: '9666633726',
    email: 'Karthik@gmail.com',
    date: '2025-07-01',
    type: 'Full Day',
    fromDate: '2025-07-10',
    toDate: '2025-07-12',
    noOfDays: 3,
    leaveType: 'Casual Leave (CL)',
    timeType: 'AM',
    reason: 'Family function',
  },
  {
    id: 2,
    empId: 'KA0046',
    name: 'Mahesh',
    mobile: '9999999999',
    email: 'Mahesh@gmail.com',
    date: '2025-07-02',
    type: 'Half Day',
    fromDate: '2025-07-15',
    toDate: '2025-07-15',
    noOfDays: 0.5,
    leaveType: 'Sick Leave (SL)',
    timeType: 'PM',
    reason: 'Medical appointment',
  },
  {
    id: 3,
    empId: 'KA0047',
    name: 'Priya',
    mobile: '9888888888',
    email: 'Priya@gmail.com',
    date: '2025-07-03',
    type: 'Full Day',
    fromDate: '2025-07-20',
    toDate: '2025-07-20',
    noOfDays: 0.5,
    leaveType: 'Earned Leave (EL)',
    timeType: 'AM',
    reason: 'Personal work',
  },
];

export default function ApprovalsTable() {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div className={styles.tableContainer}>
      <table className="circular-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>No. of Days</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {approvedRows.map((row, idx) => (
            <tr className='circular-table-row' key={row.id}>
              <td>{idx + 1}</td>
              <td>{row.empId}</td>
              <td>{row.name}</td>
              <td>{row.fromDate}</td>
              <td>{row.toDate}</td>
              <td>{row.noOfDays}</td>
              <td>{row.mobile}</td>
              <td>
                {/* <a href={`mailto:${row.email}`} className="email-link">
                  {row.email}
                </a> */}
                {row.email}
              </td>
              <td>
                <ApprovalsTray
                  row={row}
                  selectedRow={selectedRow}
                  onSelectRow={setSelectedRow}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
