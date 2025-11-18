import React, { useState } from "react";
import styles from "./ProdTab.module.css";

function IncomingReport({ navigate }) {
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
          <label htmlFor="">Milk Type : </label>
          <select name="" id="">
            <option value="">Cow</option>
            <option value="">Buffalo</option>
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <button className={styles.submitTransportBtn}>Submit</button>
          <button
            className={styles.cancelBtnTransport}
            onClick={() => navigate("/productions")}
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
              <th>Route Code</th>
              <th>Vechile Number</th>
              <th>Milk Type</th>
              <th>Quantity(ltr)</th>
              <th>Fat(%)</th>
              <th>SNF(%)</th>
              <th>Temp</th>
              <th>Unloaded Tanker No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>0000-00-00</td>
              <td>R4567</td>
              <td>AA00AA0000</td>
              <td>Cow</td>
              <td>250</td>
              <td>10%</td>
              <td>4.5%</td>
              <td>5.6</td>
              <td>T445</td>
            </tr>
            <tr>
              <td>2</td>
              <td>0000-00-00</td>
              <td>R4567</td>
              <td>AA00AA0000</td>
              <td>Cow</td>
              <td>250</td>
              <td>10%</td>
              <td>4.5%</td>
              <td>5.6</td>
              <td>T445</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default IncomingReport;
