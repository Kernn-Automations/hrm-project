import React, { useState } from "react";
import styles from "./Reports.module.css";

function ReportsForm({ report = {} }) {
  const today = new Date().toISOString().slice(0, 10);
  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // HH:MM format
  };

  const [formData, setFormData] = useState({
    date: report.date || today,
    time: report.time || getCurrentTime(),
    bmc: report.type || "",
    shift: report.shift || "",
    routeCode: report.routeCode || "",
    vehicleNumber: report.vehicle || "",
    arrivalTime: report.arrival || "",
    centerCode: report.centerCode || "",
    milkType: report.milkType || "",
    sampleNumber: report.sample || "",
    cans: report.cans || "",
    quantity: report.qty || "",
    fat: report.fat || "",
    snf: report.snf || "",
    clr: report.clr || "",
    milkClass: report.milkClass || ""
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={`container-lg ${styles.form}`}>
        <div className={`row m-0 p-3 ${styles.formRow}`}>
          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Date :</label>
            <input
              type="date"
              className={styles.input}
              value={formData.date}
              onChange={handleChange("date")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Time :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.time}
              onChange={handleChange("time")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>BMC :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.bmc}
              onChange={handleChange("bmc")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Shift :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.shift}
              onChange={handleChange("shift")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Route Code :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.routeCode}
              onChange={handleChange("routeCode")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Vehicle Number :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.vehicleNumber}
              onChange={handleChange("vehicleNumber")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Arrival Time :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.arrivalTime}
              onChange={handleChange("arrivalTime")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Center Code :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.centerCode}
              onChange={handleChange("centerCode")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Milk Type :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.milkType}
              onChange={handleChange("milkType")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Sample Number :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.sampleNumber}
              onChange={handleChange("sampleNumber")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>No. of Cans :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.cans}
              onChange={handleChange("cans")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Quantity :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.quantity}
              onChange={handleChange("quantity")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Fat :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.fat}
              onChange={handleChange("fat")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>SNF :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.snf}
              onChange={handleChange("snf")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>CLR :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.clr}
              onChange={handleChange("clr")}
            />
          </div>

          <div className={`col-5 p-2 ${styles.feildCol}`}>
            <label className={styles.label}>Milk Class :</label>
            <input
              type="text"
              className={styles.input}
              value={formData.milkClass}
              onChange={handleChange("milkClass")}
            />
          </div>
        </div>
      </div>

      <div className={styles.submitRow}>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReportsForm;
