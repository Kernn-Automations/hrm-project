import React from "react";
import OngoingPopup from "./OngoingPopup";
import styles from "./Products.module.css";

function OngoingProducts() {
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <table className="square-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Product SKU</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Units</th>
              <th>Sales Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
            // key={product.id}
            // className="animated-row"
            // style={{ animationDelay: `${index * 0.1}s` }}
            >
              <td>1</td>
              <td>0000-00-00</td>
              <td>SKU0099</td>
              <td>Product 1</td>
              <td>Category 1</td>
              <td>Kg</td>

              <td>120</td>
              <td>Pending</td>
              <td>
                <OngoingPopup btnName={"view"} btnStyling={styles.viewbtn} />
              </td>
            </tr>
            <tr
            // key={product.id}
            // className="animated-row"
            // style={{ animationDelay: `${index * 0.1}s` }}
            >
              <td>1</td>
              <td>0000-00-00</td>
              <td>SKU0099</td>
              <td>Product 1</td>
              <td>Category 1</td>
              <td>packed</td>

              <td>340</td>
              <td>pending</td>
              <td>
                <OngoingPopup btnName={"view"} btnStyling={styles.viewbtn} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OngoingProducts;
