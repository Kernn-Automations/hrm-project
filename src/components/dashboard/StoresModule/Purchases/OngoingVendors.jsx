import React from "react";

import styles from "./Purchases.module.css";
import OngoingVendorsForm from "./OngoingVendorsForm";

function OngoingVendors({ navigate }) {
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <table className="w-75 square-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Vendor ID</th>
              <th>Vendor Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>00/00/0000</td>
              <td>VID990088</td>
              <td>Vendor 1</td>
              <td>
                <OngoingVendorsForm btnName={"view"} btnStyling={styles.editbtn} />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>00/00/0000</td>
              <td>VID990088</td>
              <td>Vendor 1</td>
              <td>
                <OngoingVendorsForm btnName={"view"} btnStyling={styles.editbtn} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OngoingVendors;
