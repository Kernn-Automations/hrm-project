import React, { useState } from "react";
import styles from "./AddContract.module.css";

const AddContract = ({ onBack }) => {
  const [type, setType] = useState("");

  return (
    <div className={styles.pageWrapper}>
      {/* Top bar */}
      

      {/* Selection */}
      <div className={styles.selectorRow}>
        <label className={styles.contractLabel}>Type of Contract:</label>
        <select className={styles.selectBox} onChange={(e) => setType(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="person">Person</option>
          <option value="vehicle">Vehicle</option>
        </select>
      </div>

      {/* Form layout */}
      {type === "person" && (
        <div className={styles.columnsWrapper}>
          <div className={styles.column}>
            <h2>Personal Details</h2>
            {renderCommonFields()}
          </div>
          <div className={styles.column}>
            <h2>Address Details</h2>
            {renderAddressFields()}
            <h2>Contact Details</h2>
            {renderContactFields()}
          </div>
          <div className={styles.column}>
            <h2>Emergency Contact Details</h2>
            {renderEmergencyFields()}
            <h2>Bank Details</h2>
            {renderBankFields()}
          </div>
        </div>
      )}

      {type === "vehicle" && (
        <div className={styles.columnsWrapper}>
          <div className={styles.column}>
            <h2>Personal Details</h2>
            {renderCommonFields()}
            <h2>Contact Details</h2>
            {renderContactFields()}
          </div>
          <div className={styles.column}>
            <h2>Address Details</h2>
            {renderAddressFields()}
            <h2>Emergency Details</h2>
            {renderEmergencyFields()}
          </div>
          <div className={styles.column}>
            <h2>Contract Details</h2>
            {renderVehicleContractFields()}
            <h2>Bank Details</h2>
            {renderBankFields()}
          </div>
        </div>
      )}
    </div>
  );
};

// Field renderers (simple placeholders for now)
const renderCommonFields = () => (
  <>
    <Input label="Contract ID" />
    <Input label="First Name" />
    <Input label="Last Name" />
    <Input label="Surname" />
    <Input label="Date of Birth" />
    <Input label="Gender" />
    <Input label="Aadhar Number" />
    <Input label="PAN Number" />
    <Input label="Religion" />
    <Input label="Caste" />
    <Input label="Sub-Caste" />
    <Input label="Blood Group" />
  </>
);

const renderAddressFields = () => (
  <>
    <Input label="H.No" />
    <Input label="Address Line 1" />
    <Input label="Address Line 2" />
    <Input label="City/Village" />
    <Input label="District" />
    <Input label="State" />
    <Input label="Pincode" />
  </>
);

const renderContactFields = () => (
  <>
    <Input label="Phone Number" />
    <Input label="Alternate Number" />
  </>
);

const renderEmergencyFields = () => (
  <>
    <Input label="Phone Number" />
    <Input label="Relative Name" />
    <Input label="Relation" />
  </>
);

const renderBankFields = () => (
  <>
    <Input label="Bank Name" />
    <Input label="Account Number" />
    <Input label="IFSC Code" />
    <Input label="Branch Name" />
  </>
);

const renderVehicleContractFields = () => (
  <>
    <Input label="Vehicle Type" />
    <Input label="Vehicle Number" />
    <Input label="License Number" />
    <Input label="RC" />
    <Input label="Pollution Certificate" />
    <Input label="Insurance Number" />
    <Input label="Contract From" />
    <Input label="Contract To" />
  </>
);

const Input = ({ label }) => (
  <div className={styles.fieldGroup}>
    <label>{label}</label>
    <input type="text" />
  </div>
);

export default AddContract;
