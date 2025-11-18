import React, { useState } from "react";
import styles from "./ProdTab.module.css";

function AnalysisForm({ navigate }) {
  const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const today = new Date(Date.now()).toISOString().slice(0, 10);

  const [from, setFrom] = useState(date);
  const [to, setTo] = useState(today);

  return (
    <>
      <div className={styles.transportContainer}>
        <div className={styles.transportForm}>
          <label htmlFor="">Production : </label>
          <select name="" id="">
            <option value="">Prod 1</option>
            <option value="">Prod 2</option>
            <option value="">Prod 3</option>
          </select>
          <label htmlFor="">From : </label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <label htmlFor="">To : </label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className={styles.submitTransportBtn}>Submit</button>
          <button
            className={styles.cancelBtnTransport}
            onClick={() => navigate("/productions")}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default AnalysisForm;
