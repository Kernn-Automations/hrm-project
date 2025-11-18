import React from 'react';

const pendingRows = [
  { id: 1, empId: 'KA0045', name: 'Karthik', FromDate:'10-10-10',ToDate: '11-10-10',noofdays:'1',mobile: '9666633726', email: 'Karthik@gmail.com' },
  { id: 2, empId: 'KA0046', name: 'Mahesh', mobile: '9999999999', email: 'Mahesh@gmail.com' },
  { id: 3, empId: 'KA0047', name: 'Priya', mobile: '9888888888', email: 'Priya@gmail.com' },
];

export default function PendingsTable({ onView }) {
  return (
    <div className="container pending-table-wrapper">
      <table className="pending-table">
        <thead>
          <tr>
            <th style={{ minWidth: 60 }}>S.no</th>
            <th style={{ minWidth: 120 }}>Employee ID</th>
            <th style={{ minWidth: 120 }}>Name</th>
            <th style={{ minWidth: 120 }}>FromDate</th>
            <th style={{ minWidth: 120 }}>ToDate</th>
            <th style={{ minWidth: 120 }}>Noofdays</th>
            <th style={{ minWidth: 130 }}>Mobile</th>
            <th style={{ minWidth: 200 }}>Email</th>
            <th style={{ minWidth: 90 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingRows.map((row, idx) => (
            <tr key={row.id}>
              <td>{idx + 1}</td>
              <td><b>{row.empId}</b></td>
              <td>{row.name}</td>
              <td>{row.FromDate}</td>
              <td>{row.ToDate}</td>
              <td>{row.noofdays}</td>
              <td>{row.mobile}</td>
              <td>
                <a href={`mailto:${row.email}`} style={{ color: '#1a7db8', textDecoration: 'underline' }}>
                  {row.email}
                </a>
              </td>
              <td>
                <button className="view-btn" type="button" onClick={() => onView && onView(row)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
