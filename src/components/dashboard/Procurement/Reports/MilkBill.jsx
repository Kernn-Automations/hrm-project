import React, { useState } from "react";
import styles from "./Reports.module.css";
import milkBillData from "../../../../milk_bill_payment_data.json";
import MilkBillPopup from "./MilkBillPopup";

function MilkBill() {
  const today = new Date();
  // Set default date range to include the data in the JSON (2025-2026)
  const defaultFromDate = new Date("2025-01-01");
  const defaultToDate = new Date("2026-12-31");

  const [from, setFrom] = useState(defaultFromDate.toISOString().slice(0, 10));
  const [to, setTo] = useState(defaultToDate.toISOString().slice(0, 10));
  const [centerCode, setCenterCode] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [milkBillCycle, setMilkBillCycle] = useState("");
  const [filteredData, setFilteredData] = useState(milkBillData);

  // Get unique Center Codes from data
  const centerCodes = Array.from(
    new Set(milkBillData.map((item) => item["Center Code"]).filter(Boolean))
  );

  // Get unique Milk Bill Cycles from data (using Bill Cycle field)
  const milkBillCycles = Array.from(
    new Set(milkBillData.map((item) => item["Bill Cycle"]).filter(Boolean))
  );

  const formatDate = (yyyyMMdd) => {
    return new Date(yyyyMMdd);
  };

  const handleSubmit = () => {
    const fromDate = new Date(from);
    const toDate = new Date(to);

    const result = milkBillData.filter((item) => {
      const itemFromDate = formatDate(item["From date"]);
      const itemToDate = formatDate(item["To date"]);

      // Check if the date range overlaps with the filter range
      const matchesDate = itemFromDate <= toDate && itemToDate >= fromDate;

      const matchesCenter = centerCode
        ? item["Center Code"] === centerCode
        : true;

      const matchesStatus = paymentStatus
        ? item["Payment Status"]?.toLowerCase() === paymentStatus.toLowerCase()
        : true;

      const matchesCycle = milkBillCycle
        ? item["Bill Cycle"] === milkBillCycle
        : true;

      return matchesDate && matchesCenter && matchesStatus && matchesCycle;
    });

    setFilteredData(result);
  };

  return (
    <>
      <div className={styles.transportContainer}>
        <div className={styles.transportForm}>
          <label>Milk Bill Cycle:</label>
          <select
            value={milkBillCycle}
            onChange={(e) => setMilkBillCycle(e.target.value)}
          >
            <option value="">-- Select --</option>
            {milkBillCycles.map((cycle, index) => (
              <option key={index} value={cycle}>
                {cycle}
              </option>
            ))}
          </select>
          <label>From:</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <label>To:</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <label>Center Code:</label>
          <select
            value={centerCode}
            onChange={(e) => setCenterCode(e.target.value)}
          >
            <option value="">-- Select --</option>
            {centerCodes.map((code, index) => (
              <option key={index} value={code}>
                {code}
              </option>
            ))}
          </select>

          <label>Payment Status:</label>
          <select
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button className={styles.submitTransportBtn} onClick={handleSubmit}>
            Submit
          </button>
          <button
            className={styles.cancelBtnTransport}
            onClick={() => {
              setCenterCode("");
              setPaymentStatus("");
              setMilkBillCycle("");
              setFrom(defaultFromDate.toISOString().slice(0, 10));
              setTo(defaultToDate.toISOString().slice(0, 10));
              setFilteredData(milkBillData);
            }}
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <table className="square-table w-75">
          <thead>
            <tr>
              <th>S.No</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Bill Cycle</th>
              <th>Center Code</th>
              <th>Center Name</th>
              <th>Sub Code</th>
              <th>Gross Amount</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, idx) => {
                return (
                  <tr key={idx}>
                    <td>{row.S?.no ?? idx + 1}</td>
                    <td>{row["From date"] ?? "-"}</td>
                    <td>{row["To date"] ?? "-"}</td>
                    <td>{row["Bill Cycle"] ?? "-"}</td>
                    <td>{row["Center Code"] ?? "-"}</td>
                    <td>{row["Center Name"] ?? "-"}</td>
                    <td>{row["Sub Code"] ?? "-"}</td>
                    <td>{row["Gross Amount"] ?? "-"}</td>
                    <td>{row["Payment Status"] ?? "-"}</td>
                    <td>
                      <MilkBillPopup
                        btnName={"View"}
                        btnStyle={styles.viewbtn}
                        row={row}
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="10" className="text-center">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MilkBill;
