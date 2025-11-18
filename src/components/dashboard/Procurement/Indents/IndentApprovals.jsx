import React, { useState } from 'react';
import styles from './NewIndent.module.css';
import IndentApprovalTray from './IndentApprovalTray';

const approvedRows = [
  {
    id: 1,
    bmcscc: 'BMC 1',
    empId: 'KA0045',
    by: 'Karthik',
    store: 'Store 1',
    code: '123',
    mname: 'feed',
    stockinhand: '22',
    reqquantity:'22',
    date: '2025-07-01',
  },
  {
    id: 2,
    bmcscc: 'BMC 1',
    empId: 'KA0045',
    by: 'Karthik',
    store: 'Store 1',
    code: '123',
    mname: 'feed',
    stockinhand: '22',
    reqquantity:'22',
    date: '2025-07-02',
  },
];

export default function IndentApprovals() {
  const [selectedRow, setSelectedRow] = useState(null);

  // ✅ Add this missing function
  const handleView = (row) => {
    setSelectedRow(row);
  };

  return (
    <div className={styles.tableContainer}>
      <table className="circular-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>BMC's/CC</th>
            <th>By</th>
            <th>Store to</th>
            <th>Material Code</th>
            <th>Material Name</th>
            <th>Stock in Hand</th>
            <th>Required Qty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {approvedRows.map((row, idx) => (
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
              <td>
                <button className="view-btn" onClick={() => handleView(row)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Indent Approval Tray */}
      <IndentApprovalTray
        data={selectedRow}
        open={!!selectedRow}
        onClose={() => setSelectedRow(null)}
      />
    </div>
  );
}
