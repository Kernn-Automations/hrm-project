import React, { useState } from "react";
import styles from "./OngoingContracts.module.css";

const ViewOngoingDetails = ({ contract, onBack }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableData, setEditableData] = useState({ ...contract.details });

  const isVehicle = contract.contractType === "vehicle";

  const handleChange = (field, value) => {
    setEditableData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const Field = ({ label, fieldKey }) => (
    <div className={styles.fieldGroup}>
      <label>{label}:</label>
      {isEditMode ? (
        <input
          type="text"
          value={editableData[fieldKey] || ""}
          onChange={(e) => handleChange(fieldKey, e.target.value)}
        />
      ) : (
        <span>{editableData[fieldKey] || "—"}</span>
      )}
    </div>
  );

  const renderPersonColumns = () => (
    <>
      {/* Column 1 */}
      <div className={styles.column}>
        <h3>Personal Details</h3>
        <Field label="Contract ID" fieldKey="contractId" />
        <Field label="First Name" fieldKey="firstName" />
        <Field label="Last Name" fieldKey="lastName" />
        <Field label="Surname" fieldKey="surname" />
        <Field label="Date of Birth" fieldKey="dob" />
        <Field label="Gender" fieldKey="gender" />
        <Field label="Aadhar" fieldKey="aadhar" />
        <Field label="PAN" fieldKey="pan" />
        <Field label="Religion" fieldKey="religion" />
        <Field label="Caste" fieldKey="caste" />
        <Field label="Sub-Caste" fieldKey="subCaste" />
        <Field label="Blood Group" fieldKey="bloodGroup" />
      </div>

      {/* Column 2 */}
      <div className={styles.column}>
        <h3>Address Details</h3>
        <Field label="H.No" fieldKey="hno" />
        <Field label="Address 1" fieldKey="address1" />
        <Field label="Address 2" fieldKey="address2" />
        <Field label="City/Village" fieldKey="city" />
        <Field label="District" fieldKey="district" />
        <Field label="State" fieldKey="state" />
        <Field label="Pincode" fieldKey="pincode" />

        <h3>Contact Details</h3>
        <Field label="Phone" fieldKey="phone" />
        <Field label="Alternate Phone" fieldKey="altPhone" />
      </div>

      {/* Column 3 */}
      <div className={styles.column}>
        <h3>Emergency Contact Details</h3>
        <Field label="Phone" fieldKey="emergencyPhone" />
        <Field label="Relative Name" fieldKey="relativeName" />
        <Field label="Relation" fieldKey="relation" />

        <h3>Bank Details</h3>
        <Field label="Bank Name" fieldKey="bankName" />
        <Field label="Account No" fieldKey="accountNumber" />
        <Field label="IFSC" fieldKey="ifsc" />
        <Field label="Branch" fieldKey="branch" />
      </div>
    </>
  );

  const renderVehicleColumns = () => (
    <>
      {/* Column 1 */}
      <div className={styles.column}>
        <h3>Personal Details</h3>
        <Field label="Contract ID" fieldKey="contractId" />
        <Field label="First Name" fieldKey="firstName" />
        <Field label="Last Name" fieldKey="lastName" />
        <Field label="Surname" fieldKey="surname" />
        <Field label="Date of Birth" fieldKey="dob" />
        <Field label="Gender" fieldKey="gender" />
        <Field label="Aadhar" fieldKey="aadhar" />
        <Field label="PAN" fieldKey="pan" />
        <Field label="Religion" fieldKey="religion" />
        <Field label="Caste" fieldKey="caste" />
        <Field label="Sub-Caste" fieldKey="subCaste" />
        <Field label="Blood Group" fieldKey="bloodGroup" />

        <h3>Contact Details</h3>
        <Field label="Phone" fieldKey="phone" />
        <Field label="Alternate Phone" fieldKey="altPhone" />
      </div>

      {/* Column 2 */}
      <div className={styles.column}>
        <h3>Address Details</h3>
        <Field label="H.No" fieldKey="hno" />
        <Field label="Address 1" fieldKey="address1" />
        <Field label="Address 2" fieldKey="address2" />
        <Field label="City/Village" fieldKey="city" />
        <Field label="District" fieldKey="district" />
        <Field label="State" fieldKey="state" />
        <Field label="Pincode" fieldKey="pincode" />

        <h3>Emergency Details</h3>
        <Field label="Phone" fieldKey="emergencyPhone" />
        <Field label="Relative Name" fieldKey="relativeName" />
        <Field label="Relation" fieldKey="relation" />
      </div>

      {/* Column 3 */}
      <div className={styles.column}>
        <h3>Contract Details</h3>
        <Field label="Vehicle Type" fieldKey="vehicleType" />
        <Field label="Vehicle Number" fieldKey="vehicleNumber" />
        <Field label="License Number" fieldKey="license" />
        <Field label="RC" fieldKey="rc" />
        <Field label="Pollution" fieldKey="pollution" />
        <Field label="Insurance" fieldKey="insurance" />
        <Field label="Contract From" fieldKey="contractFrom" />
        <Field label="Contract To" fieldKey="contractTo" />

        <h3>Bank Details</h3>
        <Field label="Bank Name" fieldKey="bankName" />
        <Field label="Account No" fieldKey="accountNumber" />
        <Field label="IFSC" fieldKey="ifsc" />
        <Field label="Branch" fieldKey="branch" />
      </div>
    </>
  );

  return (
  <div className={styles.detailsPage}>
    <div className={styles.headerRow}>
      <h2>{contract.contractType === "person" ? "Person" : "Vehicle"} Contract Details</h2>
      <button className={styles.backBtn} onClick={onBack}>← Back</button>
    </div>

    <div className={styles.columnsWrapper}>
      {isVehicle ? renderVehicleColumns() : renderPersonColumns()}
    </div>

    <div className={styles.actionsRow}>
      {!isEditMode ? (
        <button className={styles.editBtn} onClick={() => setIsEditMode(true)}>Edit</button>
      ) : (
        <>
          <button
            className={styles.saveBtn}
            onClick={() => setIsEditMode(false)}
          >
            Save
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => {
              setEditableData({ ...contract.details });
              setIsEditMode(false);
            }}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  </div>
);

};

export default ViewOngoingDetails;
