import React from "react";
import styles from "./ProdTab.module.css";

function Analysis({ navigate }) {
  return (
    <>
      <div className="d-flex justify-content-center p-3 pt-5">
        <div
          className={`row m-0 p-0 justify-content-center ${styles.prodsContainer}`}
        >
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/productions/Analysis-form")}
          >
            OverAll
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/productions/Analysis-form")}
          >
            Prod 1
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/productions/Analysis-form")}
          >
            Prod 2
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/productions/Analysis-form")}
          >
            Prod 3
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/productions/Analysis-form")}
          >
            Prod 4
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/productions/Analysis-form")}
          >
            Prod 5
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/productions/Analysis-form")}
          >
            Prod 6
          </div>
          <div
            className={`col-3 ${styles.prodbox}`}
            onClick={() => navigate("/productions/Analysis-form")}
          >
            Prod 7
          </div>
        </div>
      </div>
    </>
  );
}

export default Analysis;
