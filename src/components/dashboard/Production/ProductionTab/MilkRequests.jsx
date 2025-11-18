import React from "react";
import styles from "./ProdTab.module.css";

function MilkRequests({ navigate }) {
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <table className="square-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Time</th>
              <th>Department</th>
              <th>Department Code</th>
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Quantity(ltr)</th>
              <th>Milk Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>0000-00-00</td>
              <td>00:00</td>
              <td>Dept 1</td>
              <td>DE001</td>
              <td>Karthik</td>
              <td>EMP0023</td>
              <td>234</td>
              <td>Cow</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0000-00-00</td>
              <td>00:00</td>
              <td>Dept 1</td>
              <td>DE001</td>
              <td>Karthik</td>
              <td>EMP0023</td>
              <td>234</td>
              <td>Cow</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MilkRequests;
