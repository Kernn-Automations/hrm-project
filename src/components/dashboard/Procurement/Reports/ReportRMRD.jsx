import React, { useState } from "react";
import styles from "./Reports.module.css";
import ReportsForm from "./ReportsForm";

function ReportRMRD() {
  const tableData = [
    {
      sno: 1,
      type: "BMC",
      shift: "Morning",
      routeCode: "RT0001",
      vehicle: "AA00AA0000",
      arrival: "2:30",
      centerCode: "C002",
      milkType: "Cow",
      sample: "2002",
      cans: 3,
      qty: "7L",
    },
    {
      sno: 2,
      type: "BMC",
      shift: "Morning",
      routeCode: "RT0001",
      vehicle: "AA00AA0000",
      arrival: "2:30",
      centerCode: "C002",
      milkType: "Cow",
      sample: "2002",
      cans: 3,
      qty: "7L",
    },
  ];

  const [report, setReport] = useState();

  return (
   <>
    {!report &&  <div className="d-flex justify-content-center p-3">
      <table className="square-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>BMC/CC</th>
            <th>Shift</th>
            <th>Route Code</th>
            <th>Vehicle Number</th>
            <th>Arrival Time</th>
            <th>Center Code</th>
            <th>Milk Type</th>
            <th>Sample Number</th>
            <th>No. of Cans</th>
            <th>Qty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.sno}</td>
              <td>{row.type}</td>
              <td>{row.shift}</td>
              <td>{row.routeCode}</td>
              <td>{row.vehicle}</td>
              <td>{row.arrival}</td>
              <td>{row.centerCode}</td>
              <td>{row.milkType}</td>
              <td>{row.sample}</td>
              <td>{row.cans}</td>
              <td>{row.qty}</td>
              <td><button className={styles.viewbtn} onClick={() => setReport(row)} >view</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>}
    {report && <ReportsForm report={report}/>}
   </>
  );
}

export default ReportRMRD;
