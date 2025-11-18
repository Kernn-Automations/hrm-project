import React, { useState } from "react";
import styles from "./Reports.module.css";
import milkBillData from "../../../../milk_farmer_bills_100_days.json";

function MilkBillReports() {
  const today = new Date();
  const date = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  const [from, setFrom] = useState(date.toISOString().slice(0, 10));
  const [to, setTo] = useState(today.toISOString().slice(0, 10));
  const [centerCode, setCenterCode] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [filteredData, setFilteredData] = useState(milkBillData);

  // Get unique Center Codes from data
  const centerCodes = Array.from(
    new Set(milkBillData.map((item) => item["BMC/CC"]).filter(Boolean))
  );

  const formatDate = (ddmmyyyy) => {
    const [dd, mm, yyyy] = ddmmyyyy.split("/");
    return new Date(`${yyyy}-${mm}-${dd}`);
  };

  const handleSubmit = () => {
    const fromDate = new Date(from);
    const toDate = new Date(to);

    const result = milkBillData.filter((item) => {
      const itemDate = formatDate(item["Date"]);
      const matchesDate = itemDate >= fromDate && itemDate <= toDate;

      const matchesCenter = centerCode ? item["BMC/CC"] === centerCode : true;

      const matchesStatus = paymentStatus
        ? item["Payment Status"]?.toLowerCase() === paymentStatus.toLowerCase()
        : true;

      return matchesDate && matchesCenter && matchesStatus;
    });

    setFilteredData(result);
  };

  return (
    <>
      <div className={styles.transportContainer}>
        <div className={styles.transportForm}>
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
              setFrom(date.toISOString().slice(0, 10));
              setTo(today.toISOString().slice(0, 10));
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
              <th>Date</th>
              <th>Center Code</th>
              <th>Center Name</th>
              <th>Sub Code</th>
              <th>Quantity</th>
              <th>Milk Type</th>
              <th>Gross Amount</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row["S.No"] ?? idx + 1}</td>
                  <td>{row["Date"] ?? "-"}</td>
                  <td>{row["BMC/CC"] ?? "-"}</td>
                  <td>{row["VLA Name"] ?? "-"}</td>
                  <td>{row["VLA Code"] ?? "-"}</td>
                  <td>{row["Amount"] ?? "-"}</td>
                  <td>{"30L"}</td>
                  <td>{row["S.No"] % 2 === 0 ? "Buffalo" : "Cow"}</td>
                  <td>{row["Payment Status"] ?? "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
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

export default MilkBillReports;
