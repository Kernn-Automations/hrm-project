import React from "react";
import styles from "./FinanceVLA.module.css";
function PendingAmount() {
  return (
    <>
      <div className={styles.transportContainer}>
        <div className={styles.transportForm}>
          
          <label htmlFor="">BMC/CC : </label>
          <select name="" id="">
            <option value="">BMC 1</option>
            <option value="">BMC 2</option>
            <option value="">BMC 3</option>
          </select>
          <button className={styles.submitTransportBtn}>Submit</button>
          <button
            className={styles.cancelBtnTransport}
            onClick={() => navigate("purchases")}
          >
            Cancel
          </button>
        </div>

        <div className="d-flex"></div>
      </div>

      <div className="d-flex justify-content-center p-3">
        <table className="w-75 square-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>BMC/CC</th>
              <th>VLA Code</th>
              <th>VLA Name</th>
              <th>Net Amount</th>
              <th>Paid Amount</th>
              <th>Pending Amount</th>
              <th>No.of Installments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>00/00/0000</td>
              <td>BMC 1</td>
              <td>VLA009</td>
              <td>VLA 1</td>
              <td>1233</td>
              <td>588</td>
              <td>1212</td>
              <td>5</td>
            </tr>
            <tr>
              <td>1</td>
              <td>00/00/0000</td>
              <td>BMC 1</td>
              <td>VLA009</td>
              <td>VLA 1</td>
              <td>1233</td>
              <td>588</td>
              <td>1212</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PendingAmount;
