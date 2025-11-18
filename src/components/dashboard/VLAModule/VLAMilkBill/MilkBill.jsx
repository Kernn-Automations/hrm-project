import React from "react";
import styles from "./MilkBill.module.css";

// New data provided by the user
const milkBillData = [
  {
    "S.No": 1,
    "Date": "2025-04-17",
    "BMC/CC": "CC-X",
    "VLA Code": "VLA003",
    "VLA Name": "Farmer 38",
    "Milk Bill Number": "MB66242",
    "Amount": 755.17,
    "Detection": 11.97,
    "Net Amount": 743.2,
    "Payment Status": "Paid"
  },
  {
    "S.No": 2,
    "Date": "2025-04-17",
    "BMC/CC": "BMC-A",
    "VLA Code": "VLA029",
    "VLA Name": "Farmer 64",
    "Milk Bill Number": "MB82755",
    "Amount": 1206.79,
    "Detection": 6.78,
    "Net Amount": 1200.01,
    "Payment Status": "Pending"
  },
  {
    "S.No": 3,
    "Date": "2025-04-17",
    "BMC/CC": "CC-Y",
    "VLA Code": "VLA023",
    "VLA Name": "Farmer 11",
    "Milk Bill Number": "MB26808",
    "Amount": 1155.43,
    "Detection": 83.78,
    "Net Amount": 1071.65,
    "Payment Status": "Pending"
  },
  {
    "S.No": 4,
    "Date": "2025-04-17",
    "BMC/CC": "BMC-A",
    "VLA Code": "VLA015",
    "VLA Name": "Farmer 19",
    "Milk Bill Number": "MB60504",
    "Amount": 1448.44,
    "Detection": 58.34,
    "Net Amount": 1390.1,
    "Payment Status": "Unpaid"
  },
  {
    "S.No": 5,
    "Date": "2025-04-17",
    "BMC/CC": "CC-Y",
    "VLA Code": "VLA043",
    "VLA Name": "Farmer 45",
    "Milk Bill Number": "MB81830",
    "Amount": 973.27,
    "Detection": 95.69,
    "Net Amount": 877.58,
    "Payment Status": "Unpaid"
  },
  {
    "S.No": 6,
    "Date": "2025-04-17",
    "BMC/CC": "CC-Y",
    "VLA Code": "VLA004",
    "VLA Name": "Farmer 65",
    "Milk Bill Number": "MB97103",
    "Amount": 1050.77,
    "Detection": 10.71,
    "Net Amount": 1040.06,
    "Payment Status": "Paid"
  },
  {
    "S.No": 7,
    "Date": "2025-04-17",
    "BMC/CC": "BMC-A",
    "VLA Code": "VLA024",
    "VLA Name": "Farmer 53",
    "Milk Bill Number": "MB76618",
    "Amount": 534.74,
    "Detection": 92.94,
    "Net Amount": 441.8,
    "Payment Status": "Pending"
  },
  {
    "S.No": 8,
    "Date": "2025-04-17",
    "BMC/CC": "BMC-A",
    "VLA Code": "VLA022",
    "VLA Name": "Farmer 24",
    "Milk Bill Number": "MB80175",
    "Amount": 831.02,
    "Detection": 63.96,
    "Net Amount": 767.06,
    "Payment Status": "Paid"
  },
  {
    "S.No": 9,
    "Date": "2025-04-17",
    "BMC/CC": "CC-X",
    "VLA Code": "VLA039",
    "VLA Name": "Farmer 90",
    "Milk Bill Number": "MB67746",
    "Amount": 506.88,
    "Detection": 41.55,
    "Net Amount": 465.33,
    "Payment Status": "Pending"
  },
  {
    "S.No": 10,
    "Date": "2025-04-17",
    "BMC/CC": "CC-X",
    "VLA Code": "VLA046",
    "VLA Name": "Farmer 17",
    "Milk Bill Number": "MB80921",
    "Amount": 662.77,
    "Detection": 68.74,
    "Net Amount": 594.03,
    "Payment Status": "Unpaid"
  },
  {
    "S.No": 11,
    "Date": "2025-04-17",
    "BMC/CC": "CC-Y",
    "VLA Code": "VLA042",
    "VLA Name": "Farmer 66",
    "Milk Bill Number": "MB33996",
    "Amount": 642.73,
    "Detection": 59.56,
    "Net Amount": 583.17,
    "Payment Status": "Unpaid"
  },
  {
    "S.No": 12,
    "Date": "2025-04-17",
    "BMC/CC": "BMC-B",
    "VLA Code": "VLA038",
    "VLA Name": "Farmer 100",
    "Milk Bill Number": "MB56267",
    "Amount": 859.33,
    "Detection": 24.7,
    "Net Amount": 834.63,
    "Payment Status": "Unpaid"
  }
  // ...add the rest of your data here
];

const columns = [
  "S.No",
  "Date",
  "BMC/CC",
  "VLA Code",
  "VLA Name",
  "Milk Bill Number",
  "Amount",
  "Detection",
  "Net Amount",
  "Payment Status"
];

const MilkBill = () => {
  return (
    <div className={styles.container}>
      <h2>Milk Bill</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {milkBillData.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MilkBill;
