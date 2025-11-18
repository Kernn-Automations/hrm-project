import React, { useState } from "react";
import styles from "./Sales.module.css";

function DeliveryChallans({ navigate }) {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const today = new Date().toISOString().slice(0, 10);

  const [from, setFrom] = useState(sevenDaysAgo);
  const [to, setTo] = useState(today);
  const [filter, setFilter] = useState("routewise");
  const [selectedRows, setSelectedRows] = useState([]);

  const dummyData = [
    {
      sno: 1,
      date: "2024-07-15",
      invoice: "IN0099",
      dealerid: "D2345",
      dealer: "Dealer 1",
      amount: 12000,
    },
    {
      sno: 2,
      date: "2024-07-16",
      invoice: "IN0100",
      dealerid: "D2346",
      dealer: "Dealer 2",
      amount: 14500,
    },
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(dummyData.map((row) => row.sno));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (sno) => {
    if (selectedRows.includes(sno)) {
      setSelectedRows((prev) => prev.filter((id) => id !== sno));
    } else {
      setSelectedRows((prev) => [...prev, sno]);
    }
  };

  const isAllSelected =
    dummyData.length > 0 && selectedRows.length === dummyData.length;

  return (
    <>
      <div className={styles.transportContainer}>
        <div className={styles.transportForm}>
          <label>Date:</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />

          <label>Filter By:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="routewise">Route Wise</option>
            <option value="manual">Manual</option>
          </select>

          <button className={styles.submitTransportBtn}>Submit</button>
          <button
            className={styles.cancelBtnTransport}
            onClick={() => navigate("/sales")}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Routewise Table */}
      {filter === "routewise" && (
        <div className="d-flex justify-content-center p-3">
          <table className="square-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>Invoice Number</th>
                <th>Dealer ID</th>
                <th>Dealer Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((row) => (
                <tr key={row.sno}>
                  <td>{row.sno}</td>
                  <td>{row.date}</td>
                  <td>{row.invoice}</td>
                  <td>{row.dealerid}</td>
                  <td>{row.dealer}</td>
                  <td>{row.amount}</td>
                  <td>Pending</td>
                  <td>
                    <button className={styles.viewbtn}>Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Manual Table */}
      {filter === "manual" && (
        <>
          <div className="d-flex justify-content-center align-items-center p-3 pt-0 flex-column">
            <div className="d-flex justify-content-end pt-3 w-75">
              <input
                type="text"
                placeholder="Search..."
                className={styles.input}
              />
            </div>

            <div className="d-flex justify-content-end pt-3 w-75">
              <button className={styles.viewbtn}>Download</button>
            </div>
            <table className="square-table w-75">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>Date</th>
                  <th>Invoice Number</th>
                  <th>Dealer ID</th>
                  <th>Dealer Name</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.sno}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.sno)}
                        onChange={() => handleSelectRow(row.sno)}
                      />
                    </td>
                    <td>{row.date}</td>
                    <td>{row.invoice}</td>
                    <td>{row.dealerid}</td>
                    <td>{row.dealer}</td>
                    <td>{row.amount}</td>
                    <td>Pending</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default DeliveryChallans;
