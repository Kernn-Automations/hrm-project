import React from "react";
import styles from "./FinanceVLA.module.css";
function FinanceVLAHome({ navigate }) {
  return (
    <>
      <div className="row m-3 mt-5 pt-5 justify-content-around">
        <div className={`col-4 m-3 ${styles.paymentsbox}`}>
          <h5>Actual Amount</h5>
          <p>Total Amount</p>
          <p className={styles.plight}>₹ 20,00,000</p>
        </div>
        <div className={`col-4 m-3 ${styles.paymentsbox}`}>
          <h5>Pending Amount</h5>
          <p>Amount to be recieved</p>
          <p className={styles.plight}>₹1,50,000</p>
        </div>
        <div className={`col-4 m-3 ${styles.paymentsbox}`}>
          <h5>Amount Recieved</h5>
          <p>Net Amount Recieved</p>
          <p className={styles.plight}>₹ 50,000</p>
        </div>
      </div>
    </>
  );
}

export default FinanceVLAHome;
