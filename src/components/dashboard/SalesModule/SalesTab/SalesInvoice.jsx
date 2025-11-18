import React, { useState } from "react";
import styles from "./Sales.module.css";

function SalesInvoice({ navigate }) {
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
          <label htmlFor="">Date : </label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <label htmlFor="">Vendors :</label>
          <select name="" id="">
            <option value="">V22 - Vendor 1</option>
            <option value="">V23 - Vendor 2</option>
            <option value="">V24 - Vendor 3</option>
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
            <tr>
              <td>1</td>
              <td>0000-00-00</td>
              <td>IN0099</td>
              <td>D2345</td>
              <td>Dealer 1</td>
              <td>12000</td>

              <td>Pending</td>
              <td>
                <button className={styles.viewbtn}>Download</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>0000-00-00</td>
              <td>IN0099</td>
              <td>D2345</td>
              <td>Dealer 1</td>
              <td>12000</td>
              <td>Pending</td>
              <td>
                <button className={styles.viewbtn}>Download</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SalesInvoice;
