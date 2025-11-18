import React, { useState, useMemo } from "react";
import data from "@/utils/sangam_dairy_data.json";
import styles from "./Reports.module.css";

function KarimnagarBMC({ onKNRClick }) {
  const defaultFromDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const defaultToDate = new Date().toISOString().slice(0, 10);

  const [filters, setFilters] = useState({
    from: defaultFromDate,
    to: defaultToDate,
    shift: "",
    centerCode: "",
    milkType: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    from: defaultFromDate,
    to: defaultToDate,
    shift: "",
    centerCode: "",
    milkType: "",
  });

  // Convert dd/mm/yyyy to yyyy-mm-dd
  const formatDate = (ddmmyyyy) => {
    if (!ddmmyyyy || !ddmmyyyy.includes("/")) return "";
    const [dd, mm, yyyy] = ddmmyyyy.split("/");
    return `${yyyy}-${mm}-${dd}`;
  };

  // Unique center codes
  const centerCodes = useMemo(() => {
    const codes = new Set();
    data.forEach((row) => {
      if (row["Center Code"]) codes.add(row["Center Code"]);
    });
    return Array.from(codes);
  }, []);

  // Apply filters on Submit
  const handleSubmit = () => {
    setAppliedFilters({ ...filters });
  };

  // Apply filtering based on appliedFilters only
  const filteredData = data.filter((row) => {
    const rowDate = formatDate(row.Date);
    const isInDateRange =
      rowDate >= appliedFilters.from && rowDate <= appliedFilters.to;

    const matchesShift = appliedFilters.shift
      ? row.Shift?.toLowerCase() === appliedFilters.shift.toLowerCase()
      : true;

    const matchesCenter = appliedFilters.centerCode
      ? row["Center Code"] === Number(appliedFilters.centerCode)
      : true;

    const matchesMilkType = appliedFilters.milkType
      ? row["Milk Type"]?.toLowerCase() ===
        appliedFilters.milkType.toLowerCase()
      : true;

    return isInDateRange && matchesShift && matchesCenter && matchesMilkType;
  });

  return (
    <>
      {/* Filters */}
      <div className={styles.transportContainer}>
        <div className={styles.transportForm}>
          <label>From: </label>
          <input
            type="date"
            value={filters.from}
            onChange={(e) => setFilters({ ...filters, from: e.target.value })}
          />

          <label>To: </label>
          <input
            type="date"
            value={filters.to}
            onChange={(e) => setFilters({ ...filters, to: e.target.value })}
          />

          <label>Shift: </label>
          <select
            value={filters.shift}
            onChange={(e) => setFilters({ ...filters, shift: e.target.value })}
          >
            <option value="">--select--</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </select>

          <label>Center Code: </label>
          <select
            value={filters.centerCode}
            onChange={(e) =>
              setFilters({ ...filters, centerCode: e.target.value })
            }
          >
            <option value="">--select--</option>
            {centerCodes.map((code, i) => (
              <option key={i} value={code}>
                {code}
              </option>
            ))}
          </select>

          <label>Milk Type: </label>
          <select
            value={filters.milkType}
            onChange={(e) =>
              setFilters({ ...filters, milkType: e.target.value })
            }
          >
            <option value="">--select--</option>
            <option value="Cow">Cow</option>
            <option value="Buffalo">Buffalo</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-around">
          <div className="d-flex">
            <button className={styles.excelBtn}>
              Excel{" "}
              <svg
                width="25"
                height="25"
                viewBox="0 0 34 37"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_27_1345"
                  maskType="luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="34"
                  height="37"
                >
                  <path
                    d="M4.5 10.625V2.75C4.5 2.28587 4.68437 1.84075 5.01256 1.51256C5.34075 1.18437 5.78587 1 6.25 1H30.75C31.2141 1 31.6592 1.18437 31.9874 1.51256C32.3156 1.84075 32.5 2.28587 32.5 2.75V34.25C32.5 34.7141 32.3156 35.1592 31.9874 35.4874C31.6592 35.8156 31.2141 36 30.75 36H6.25C5.78587 36 5.34075 35.8156 5.01256 35.4874C4.68437 35.1592 4.5 34.7141 4.5 34.25V26.375"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.625 10.625H27.25M22 17.625H27.25M22 24.625H27.25"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1 10.625H16.75V26.375H1V10.625Z"
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.25 15.875L11.5 21.125M11.5 15.875L6.25 21.125"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_27_1345)">
                  <path d="M-2.5 -2.5H39.5V39.5H-2.5V-2.5Z" fill="white" />
                </g>
              </svg>
            </button>
            <button className={styles.printBtn}>
              Print{" "}
              <svg
                width="25"
                height="25"
                viewBox="0 0 35 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 6.66667H7V0H28V6.66667ZM28 15.8333C28.4958 15.8333 28.9117 15.6733 29.2477 15.3533C29.5837 15.0333 29.7512 14.6378 29.75 14.1667C29.7488 13.6956 29.5808 13.3 29.246 12.98C28.9112 12.66 28.4958 12.5 28 12.5C27.5042 12.5 27.0888 12.66 26.754 12.98C26.4192 13.3 26.2512 13.6956 26.25 14.1667C26.2488 14.6378 26.4168 15.0339 26.754 15.355C27.0912 15.6761 27.5065 15.8356 28 15.8333ZM24.5 26.6667V20H10.5V26.6667H24.5ZM28 30H7V23.3333H0V13.3333C0 11.9167 0.510417 10.7294 1.53125 9.77167C2.55208 8.81389 3.79167 8.33444 5.25 8.33333H29.75C31.2375 8.33333 32.4847 8.81278 33.4915 9.77167C34.4983 10.7306 35.0012 11.9178 35 13.3333V23.3333H28V30Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div className="d-flex">
            <button className={styles.editbtn}>Edit</button>
            <button
              className={styles.submitTransportBtn}
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className={styles.cancelBtnTransport} onClick={onKNRClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="d-flex w-100 justify-content-center">
        <table className="square-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Shift</th>
              <th>Center Code</th>
              <th>Center Name</th>
              <th>Milk Type</th>
              <th>Quality</th>
              <th>Total Cans</th>
              <th>Qty(kgs)</th>
              <th>Sample Number</th>
              <th>FAT</th>
              <th>SNF</th>
              <th>CLR</th>
              <th>KGFAT</th>
              <th>KGSNF</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.Date}</td>
                  <td>{row.Shift}</td>
                  <td>{row["Center Code"]}</td>
                  <td>{row["Center Name"]}</td>
                  <td>{row["Milk Type"]}</td>
                  <td>{row.Quality}</td>
                  <td>{row["Total Cans"]}</td>
                  <td>{row["Qty(kgs)"]}</td>
                  <td>{row["Sample Number"]}</td>
                  <td>{row.FAT}</td>
                  <td>{row.SNF}</td>
                  <td>{row.CLR}</td>
                  <td>{row.KGFAT}</td>
                  <td>{row.KGSNF}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="15" style={{ textAlign: "center" }}>
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default KarimnagarBMC;
