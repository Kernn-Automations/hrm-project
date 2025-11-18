import React, { useState } from "react";
import styles from "./Dealers.module.css";
import DealersOngoing from "./DealersOngoing";

function DealersList({ navigate }) {
  const [viewclick, setViewclick] = useState(false);
  const onViewClick = () => setViewclick(!viewclick);
  return (
    <>
      {!viewclick && (
        <div className="d-flex justify-content-center p-3">
          <table className="square-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>Enterprise code</th>
                <th>Dealer Name</th>
                <th>Dealer Code</th>
                <th>Mobile Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>0000-00-00</td>
                <td>EN0099</td>
                <td>Dealer 1</td>
                <td>D3333</td>
                <td>8524796314</td>
                <td>
                  <button className={styles.viewbtn} onClick={onViewClick}>
                    view
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>0000-00-00</td>
                <td>EN0099</td>
                <td>Dealer 1</td>
                <td>D3333</td>
                <td>8794651230</td>
                <td>
                  <button className={styles.viewbtn} onClick={onViewClick}>
                    view
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {viewclick && <DealersOngoing onBack={onViewClick} />}
    </>
  );
}

export default DealersList;
