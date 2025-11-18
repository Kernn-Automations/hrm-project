import React, { useState, useMemo } from "react";
import styles from "./Sales.module.css";

import damagedProducts from "../../../../damaged_products_20_days.json";
import DamagesPopup from "./DamagesPopup";

function DamageAndReturn({ navigate }) {
  const now = new Date(Date.now()).toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(now);
  const [indentID, setIndentID] = useState("");
  const [vendorCode, setVendorCode] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(damagedProducts);

  // Unique dropdown options
  const indentIDs = useMemo(() => {
    const ids = damagedProducts
      .map((item) => item["Indent ID"])
      .filter(Boolean);
    return [...new Set(ids)].sort();
  }, []);

  const vendorCodes = useMemo(() => {
    const codes = damagedProducts
      .map((item) => item["Vendor Code"])
      .filter(Boolean);
    return [...new Set(codes)].sort();
  }, []);

  const handleFilter = () => {
    const filtered = damagedProducts.filter((row) => {
      const rowDate = row["Date"]?.split("/").reverse().join("-");
      const dateMatch = selectedDate ? rowDate === selectedDate : true;
      const indentMatch = indentID ? row["Indent ID"] === indentID : true;
      const vendorMatch = vendorCode ? row["Vendor Code"] === vendorCode : true;
      return dateMatch && indentMatch && vendorMatch;
    });
    setFilteredData(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const searched = damagedProducts.filter((row) => {
      return (
        row["Vendor Name"]?.toLowerCase().includes(value) ||
        row["Vendor Code"]?.toLowerCase().includes(value) ||
        row["Mobile Number"]?.toString().includes(value)
      );
    });
    setFilteredData(searched);
  };

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
              <th>Mobile Number</th>
              <th>No of Damaged Products</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td>{row["S.No"] ?? idx + 1}</td>
                <td>{row["Date"] ?? "-"}</td>
                <td>{row["Indent ID"] ?? "-"}</td>
                <td>{row["Vendor Name"] ?? "-"}</td>
                <td>{row["Vendor Code"] ?? "-"}</td>
                <td>{row["Mobile Number"] ?? "-"}</td>
                <td>{row["No of Damaged Products"] ?? "-"}</td>
                <td>
                  <DamagesPopup
                    btnName="View"
                    btnStyling={styles.viewbtn}
                    rowData={row}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DamageAndReturn;
