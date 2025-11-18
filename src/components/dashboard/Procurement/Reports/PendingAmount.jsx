import React from "react";
import styles from "./Reports.module.css";
function PendingAmount() {
  return (
    <>
      <div className={styles.selectBmc}>
        <label htmlFor="">BMC's / CC's :</label>
        <select name="" id="">
          <option value="">BMC - 1</option>
          <option value="">BMC - 2</option>
          <option value="">BMC - 3</option>
        </select>
      </div>

      <div className="d-flex justify-content-center p-3">
        <table className="square-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>BMC/CC</th>
              <th>Date</th>
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
              <td>BMC</td>
              <td>00/00/0000</td>
              <td>VLA0001</td>
              <td>Karthik</td>
              <td>2000</td>
              <td>500</td>
              <td>1500</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>BMC</td>
              <td>00/00/0000</td>
              <td>VLA0001</td>
              <td>Karthik</td>
              <td>2000</td>
              <td>500</td>
              <td>1500</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PendingAmount;
