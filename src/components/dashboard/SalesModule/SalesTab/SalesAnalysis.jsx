import React from "react";
import styles from './Sales.module.css'

function SalesAnalysis({navigate}) {
  return (
    <>
      <div className="d-flex justify-content-center p-3 pt-5">
        <div
          className={`row m-0 p-0 justify-content-center ${styles.prodsContainer}`}
        >
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/sales/analysis-form")}
          >
            OverAll
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/sales/analysis-form")}
          >
            Prod 1
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/sales/analysis-form")}
          >
            Prod 2
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/sales/analysis-form")}
          >
            Prod 3
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/sales/analysis-form")}
          >
            Prod 4
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/sales/analysis-form")}
          >
            Prod 5
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/sales/analysis-form")}
          >
            Prod 6
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/sales/analysis-form")}
          >
            Prod 7
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesAnalysis;
