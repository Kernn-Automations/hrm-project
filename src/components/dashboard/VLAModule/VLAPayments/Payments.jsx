import React from "react";

function Payments() {
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <table className="w-75 square-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Time</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>00/00/0000</td>
              <td>00:00</td>
              <td>TNX56789</td>
              <td>1200</td>
              <td>R45600</td>
            </tr>
            <tr>
              <td>1</td>
              <td>00/00/0000</td>
              <td>00:00</td>
              <td>TNX56789</td>
              <td>1200</td>
              <td>R45600</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Payments;
