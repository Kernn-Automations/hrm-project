import React, { useState, useEffect } from "react";
import styles from "./Sales.module.css";

import vendorPayments from "../../../../vendor_payments_50_days.json";
import PaymentsPopup from "./PaymentsPopup";

function Payments({ navigate }) {
  const today = new Date().toISOString().slice(0, 10); // 'yyyy-mm-dd'
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(today);
  const [indentID, setIndentID] = useState("");
  const [vendorCode, setVendorCode] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const indentIDs = [...new Set(vendorPayments.map((row) => row["Indent ID"]))];
  const vendorCodes = [
    ...new Set(vendorPayments.map((row) => row["Vendor Code"])),
  ];
  const paymentTypes = ["Paid", "Pending", "Failed"];

  const handleFilter = () => {
    let result = [...vendorPayments];

    if (selectedDate) {
      result = result.filter((row) => {
        const jsonDate = row["Date"]?.slice(0, 10); // "YYYY-MM-DD"
        return jsonDate === selectedDate;
      });
    }

    if (indentID) {
      result = result.filter((row) => row["Indent ID"] === indentID);
    }

    if (vendorCode) {
      result = result.filter((row) => row["Vendor Code"] === vendorCode);
    }

    if (paymentType) {
      result = result.filter(
        (row) =>
          row["Payment Status"]?.toLowerCase() === paymentType.toLowerCase()
      );
    }

    if (searchTerm.trim() !== "") {
      result = result.filter((row) =>
        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(result);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    handleFilter(); // Auto filter on field change
  }, [selectedDate, indentID, vendorCode, paymentType]);

  useEffect(() => {
    if (searchTerm !== "") handleFilter(); // Refilter on search term
  }, [searchTerm]);

  return (
    <>
      <div className={styles.transportContainer}>
        <div className={styles.transportForm}>
          <label>Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <label>Indent ID:</label>
          <select
            value={indentID}
            onChange={(e) => setIndentID(e.target.value)}
          >
            <option value="">-- Select --</option>
            {indentIDs.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>

          <label>Vendor Code:</label>
          <select
            value={vendorCode}
            onChange={(e) => setVendorCode(e.target.value)}
          >
            <option value="">-- Select --</option>
            {vendorCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>

          <label>Payment Type:</label>
          <select
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option value="">-- Select --</option>
            {paymentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex justify-content-center">
          <button className={styles.submitTransportBtn} onClick={handleFilter}>
            Submit
          </button>
          <button
            className={styles.cancelBtnTransport}
            onClick={() => navigate("/sales")}
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center p-3 pt-0 flex-column">
        <div className="d-flex justify-content-end pt-3 w-75">
          <input
            type="text"
            placeholder="Search..."
            className={styles.input}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center p-3">
        <table className="square-table w-75">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Indent ID</th>
              <th>Vendor Name</th>
              <th>Vendor Code</th>
              <th>Transaction ID</th>
              <th>Net Amount</th>
              <th>Payment Type</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{row["Date"] ?? "-"}</td>
                  <td>{row["Indent ID"] ?? "-"}</td>
                  <td>{row["Vendor Name"] ?? "-"}</td>
                  <td>{row["Vendor Code"] ?? "-"}</td>
                  <td>{row["Transaction ID"] ?? "-"}</td>
                  <td>{row["Net Amount"] ?? "-"}</td>
                  <td>{row["Payment Type"] ?? "-"}</td>
                  <td>{row["Payment Status"] ?? "-"}</td>
                  <td>
                    <PaymentsPopup
                      btnName="View"
                      btnStyling={styles.viewbtn}
                      rowData={row}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Payments;
