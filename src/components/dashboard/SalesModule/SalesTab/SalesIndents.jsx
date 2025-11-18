import React, { useState, useMemo } from "react";
import styles from "./Sales.module.css";

import vendorIndents from '../../../../vendor_indents_50_days.json';
import IndentsPopup from './IndentsPopup';


function SalesIndents({ navigate }) {
  const now = new Date(Date.now()).toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(now);
  const [vendorCode, setVendorCode] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(vendorIndents);

  // Extract unique vendor codes for the dropdown
  const vendorCodes = useMemo(() => {
    const codes = vendorIndents
      .map((item) => item["Vendor Code"])
      .filter((code) => code); // Remove undefined/null
    return [...new Set(codes)].sort(); // Unique & sorted
  }, []);

  const handleFilter = () => {
    const filtered = vendorIndents.filter((row) => {
      const rowDate = row["Date"]?.split("/").reverse().join("-");
      const dateMatch = selectedDate ? rowDate === selectedDate : true;
      const vendorCodeMatch = vendorCode ? row["Vendor Code"] === vendorCode : true;
      return dateMatch && vendorCodeMatch;
    });
    setFilteredData(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const searched = vendorIndents.filter((row) => {
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
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>

                <td>{row.S?.No ?? idx + 1}</td>
                <td>{row["Date"] ?? '-'}</td>
                <td>{row["Indent ID"] ?? '-'}</td>
                <td>{row["Vendor Name"] ?? '-'}</td>
                <td>{row["Vendor Code"] ?? '-'}</td>
                <td>{row["Mobile Number"] ?? '-'}</td>
                <td>{row["Amount"] ?? '-'}</td>
                <td>{row["Payment Status"] ?? '-'}</td>
                <td><IndentsPopup btnName="View" btnStyling={styles.viewbtn} rowData={row} /></td>

                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SalesIndents;
