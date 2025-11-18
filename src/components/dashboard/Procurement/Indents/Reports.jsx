// src/pages/ReportsPage.jsx
import React from 'react';
import { useState } from 'react';
import styles from './ReportsPage.module.css';
import ReturnTray from './ReturnTray';

const reportsData = [
  {
    id: 1,
    date: '2025-07-04',
    bmc: 'BMC-101',
    by: 'Ravi',
    code: 'MAT-001',
    name: 'Cement',
    returnQty: 5,
    photo: 'https://via.placeholder.com/40',
  },
  {
    id: 2,
    date: '2025-07-03',
    bmc: 'CC-202',
    by: 'Manju',
    code: 'MAT-002',
    name: 'Steel',
    returnQty: 10,
    photo: 'https://via.placeholder.com/40',
  },
];

export default function Reports() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className={styles.tableContainer}>
      <table className="circular-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>BMC / CC</th>
            <th>By</th>
            <th>Code</th>
            <th>Name</th>
            <th>Return Qty</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reportsData.map((row, index) => (
            <tr className="circular-table-row" key={row.id}>
              <td>{index + 1}</td>
              <td>{row.date}</td>
              <td>{row.bmc}</td>
              <td>{row.by}</td>
              <td>{row.code}</td>
              <td>{row.name}</td>
              <td>{row.returnQty}</td>
              <td>
                <img src={row.photo} alt="Return Proof" width="40" height="40" />
              </td>
              <td>
                <button
                  className={styles.viewbtn}
                  onClick={() => {
                    setSelectedRow(row);
                    setSelectedIndex(index);
                  }}
                >
                  View
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReturnTray
        data={selectedRow}
        index={selectedIndex}
        open={!!selectedRow}
        onClose={() => {
          setSelectedRow(null);
          setSelectedIndex(null);
        }}
      />

    </div>
  );
}
