import React, { useState } from "react";
import styles from "./Purchases.module.css";

function NewPurchases() {
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("");
  const [units, setUnits] = useState("");
  const [description, sethescription] = useState("");
  const [baseprice, setBaseprice] = useState("");
  const [purchaseprice, setPurchaseprice] = useState("");
  const [thresholdValue, setThresholdValue] = useState("");
  const [productType, setProductType] = useState("");
  const [packageWeight, setPackageWeight] = useState("");
  const [packageWeightUnit, setPackageWeightUnit] = useState("");
  const [pricing, setPricing] = useState("");
  const [pricingSlabs, setPricingSlabs] = useState([
    {
      quantityCondition: "Exact",
      quantityValueStart: "",
      quantityValueEnd: "",
      price: "",
    },
  ]);
  const [images, setImages] = useState([null]);
  const [selectedTaxes, setSelectedTaxes] = useState([]);

  const today = new Date().toISOString().slice(0, 10);
  const nowIST = new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  const user = JSON.parse(localStorage.getItem("user")) || { name: "Unknown" };

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!sku) newErrors.sku = true;
    if (!category) newErrors.category = true;
    if (!description) newErrors.description = true;
    if (!baseprice) newErrors.baseprice = true;
    if (!purchaseprice) newErrors.purchaseprice = true;
    if (!thresholdValue) newErrors.thresholdValue = true;
    if (!productType) newErrors.productType = true;

    if (productType === "loose" && !units) newErrors.units = true;
    if (productType === "packed" && (!packageWeight || !packageWeightUnit)) {
      if (!packageWeight) newErrors.packageWeight = true;
      if (!packageWeightUnit) newErrors.packageWeightUnit = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function onError(e, fieldName, setter) {
    const value = e.target.value === "null" ? "" : e.target.value;
    setter(value);
    if (value) {
      setErrors((prev) => ({ ...prev, [fieldName]: false }));
    }
  }

  const handleSubmit = (e) => {
    e.preventhefault();
    if (!validateFields()) return;

    // Form submission logic here
    const formData = {
      name,
      sku,
      category,
      units,
      description,
      baseprice,
      purchaseprice,
      thresholdValue,
      productType,
      packageWeight,
      packageWeightUnit,
      pricing,
      pricingSlabs,
      images,
      selectedTaxes,
      createdBy: user.name,
      date: today,
      time: nowIST,
    };

    console.log("Submitting Product:", formData);
  };

  const [products, setProducts] = useState([]);

  const onAddClick = () => {
    const newProduct = {
      id: Date.now(), // or any unique ID logic
      name: "",
      quantity: 0,
      price: 0,
    };
    setProducts([...products, newProduct]);
  };

  const onDeleteClick = () => {
    if (products.length === 0) return;
    setProducts(products.slice(0, -1));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={`container-lg ${styles.form}`}>
          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Date :</label>
              <input
                type="date"
                className={styles.input}
                value={today}
                readOnly
              />
            </div>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Time :</label>
              <input
                type="time"
                className={styles.input}
                value={nowIST}
                readOnly
              />
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Created By :</label>
              <input
                type="text"
                className={styles.input}
                value={user.name}
                readOnly
              />
            </div>

            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Warehouse :</label>
              <select name="" id="" className={styles.input}>
                <option value="">--select--</option>
                <option value="">Warehouse 1</option>
                <option value="">Warehouse 2</option>
              </select>
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Vendor :</label>
              <select name="" id="" className={styles.input}>
                <option value="">--select--</option>
                <option value="">Vendor 1</option>
                <option value="">Vendor 2</option>
              </select>
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <h5 className={styles.head}>Product Images</h5>
            <table className="square-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>SKU</th>
                  <th>Name</th>
                  <th>Unit</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Taxes</th>
                  <th>Net</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr>
                    <td colSpan={8}></td>
                    <td>
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={onDeleteClick}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>1</td>
                  <td colSpan={2}>
                    <select name="" id="" className={styles.input}>
                      <option value="">--select--</option>
                      <option value="">Product 1</option>
                      <option value="">Product 2</option>
                    </select>
                  </td>
                  <td></td>
                  <td colSpan={2}>
                    <input
                      type="text"
                      placeholder="Quantity"
                      className={styles.input}
                    />{" "}
                  </td>
                  <td></td>

                  <td colSpan={3}>
                    <button
                      type="button"
                      className={styles.addBtn}
                      onClick={onAddClick}
                    >
                      + Add Product
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`row m-2 p-0 ${styles.formRow}`}>
            <h6 className={styles.taxText}>
              Total Purchase Amount : <span>₹0.00</span>
            </h6>
            <h5 className={styles.taxTextH5}>
              Grand Total : <span>₹0.00</span>
            </h5>
          </div>

          <div className={styles.submitRow}>
            <button type="submit" className={styles.submitBtn}>
              Order
            </button>
            <button type="button" className={styles.cancelBtn}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default NewPurchases;
