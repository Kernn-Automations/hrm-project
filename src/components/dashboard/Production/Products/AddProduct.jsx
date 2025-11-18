import React, { useState } from "react";
import styles from "./Products.module.css";
import ImageUpload from "./ImageUpload"; // Adjust the path as needed
import TaxSelector from "./TaxSelector"; // Adjust the path as needed

function AddProduct() {
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("");
  const [units, setUnits] = useState("");
  const [description, setDescription] = useState("");
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
    e.preventDefault();
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
              <label className={styles.label}>Product Name :</label>
              <input
                type="text"
                className={styles.input}
                value={name}
                onChange={(e) => onError(e, "name", setName)}
              />
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Product SKU :</label>
              <input
                type="text"
                className={styles.input}
                value={sku}
                onChange={(e) => onError(e, "sku", setSku)}
              />
            </div>

            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Categories :</label>
              <select
                className={styles.input}
                value={category}
                onChange={(e) => onError(e, "category", setCategory)}
              >
                <option value="">--select--</option>
                <option value="cat1">Category 1</option>
                <option value="cat2">Category 2</option>
              </select>
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Product Type :</label>
              <select
                className={styles.input}
                value={productType}
                onChange={(e) => onError(e, "productType", setProductType)}
              >
                <option value="">--select--</option>
                <option value="packed">Packed</option>
                <option value="loose">Loose</option>
              </select>
            </div>

            {productType === "packed" && (
              <>
                <div className={`col-5 p-2 ${styles.feildCol}`}>
                  <label className={styles.label}>Package Weight :</label>
                  <input
                    type="text"
                    value={packageWeight}
                    className={styles.input}
                    onChange={(e) =>
                      onError(e, "packageWeight", setPackageWeight)
                    }
                  />
                </div>
                <div className={`col-5 p-2 ${styles.feildCol}`}>
                  <label className={styles.label}>Package Wt Unit :</label>
                  <input
                    type="text"
                    value={packageWeightUnit}
                    className={styles.input}
                    onChange={(e) =>
                      onError(e, "packageWeightUnit", setPackageWeightUnit)
                    }
                  />
                </div>
              </>
            )}
            {productType === "loose" && (
              <div className={`col-5 p-2 ${styles.feildCol}`}>
                <label className={styles.label}>Units :</label>
                <select
                  className={styles.input}
                  value={units}
                  onChange={(e) => onError(e, "units", setUnits)}
                >
                  <option value="">--select--</option>
                  <option value="mg">mg</option>
                  <option value="g">grams</option>
                  <option value="kg">Kgs</option>
                  <option value="ton">Tons</option>
                  <option value="ml">ml</option>
                  <option value="l">litres</option>
                  <option value="gal">gallons</option>
                </select>
              </div>
            )}
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Description :</label>
              <textarea
                className={styles.textarea}
                placeholder="Description"
                value={description}
                onChange={(e) => onError(e, "description", setDescription)}
              ></textarea>
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <h5 className={styles.head}>Product Images</h5>
            <ImageUpload images={images} setImages={setImages} />
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <TaxSelector
                selectedTaxes={selectedTaxes}
                setSelectedTaxes={setSelectedTaxes}
              />
            </div>
          </div>

          <div className={`row m-0 p-0 ${styles.formRow}`}>
            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Sale Price :</label>
              <input
                type="text"
                className={styles.input}
                value={baseprice}
                onChange={(e) => onError(e, "baseprice", setBaseprice)}
              />
            </div>

            <div className={`col-5 p-2 ${styles.feildCol}`}>
              <label className={styles.label}>Min. stock :</label>
              <input
                type="text"
                className={styles.input}
                value={thresholdValue}
                onChange={(e) =>
                  onError(e, "thresholdValue", setThresholdValue)
                }
              />
            </div>
          </div>

          <div className={styles.submitRow}>
            <button type="submit" className={styles.submitBtn}>
              Submit
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

export default AddProduct;
