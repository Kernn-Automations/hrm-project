import React from "react";
import styles from "./QandA.module.css";

function ProductsList({ navigate }) {
  return (
    <>
      <div className={styles.productsContainer}>
        <div className={styles.products}>
          <p className="m-0">Product Name - Product ID</p>
          <button className={styles.viewbtn} onClick={() => navigate("/q-and-a/qnda-form")}>View</button>
        </div>
        <div className={styles.products}>
          <p className="m-0">Product Name - Product ID</p>
          <button className={styles.viewbtn} onClick={() => navigate("/q-and-a/qnda-form")}>View</button>
        </div>
        <div className={styles.products}>
          <p className="m-0">Product Name - Product ID</p>
          <button className={styles.viewbtn} onClick={() => navigate("/q-and-a/qnda-form")}>View</button>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
