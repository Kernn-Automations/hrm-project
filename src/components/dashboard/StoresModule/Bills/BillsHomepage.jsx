import React, { useState } from "react";
// import styles from "./Sales.module.css";
// import PaymentsPopup from "./PaymentsPopup";
import styles from '../../../dashboard/SalesModule/SalesTab/Sales.module.css'

function BillsHomepage({ navigate }) {
  const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const today = new Date(Date.now()).toISOString().slice(0, 10);

  const [from, setFrom] = useState(date);
  const [to, setTo] = useState(today);
  return (
    <>
      <div className={styles.transportContainer}>
        <div className={styles.transportForm}>
          <label htmlFor="">From : </label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <label htmlFor="">To : </label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <button className={styles.submitTransportBtn}>Submit</button>
          <button
            className={styles.cancelBtnTransport}
            onClick={() => navigate("/sales")}
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center p-3">
        <table className="square-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Payment ID</th>
              <th>Received By</th>
              <th>Material Name</th>
              <th>Material Code</th>
              <th>Quantity</th>
              <th>Supplied By</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
            // key={product.id}
            // className="animated-row"
            // style={{ animationDelay: `${index * 0.1}s` }}
            >
              <td>1</td>
              <td>22-07-2025</td>
              <td>IN0099</td>
              <td>Karthik</td>
              <td>Curd</td>
              <td>MC001</td>
              <td>120</td>
              <td>Shanmukh</td>
              <td>Pending</td>
              <td ><button className={styles.downloadBtn}>Download</button></td>
            </tr>
            <tr
            // key={product.id}
            // className="animated-row"
            // style={{ animationDelay: `${index * 0.1}s` }}
            >
              <td>2</td>
              <td>23-07-2025</td>
              <td>IN00100</td>
              <td>Hari Krishna</td>
              <td>Milk</td>
              <td>MC002</td>
              <td>120</td>
              <td>Karthik</td>
              <td>Pending</td>
              <td ><button className={styles.downloadBtn}>Download</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BillsHomepage;
