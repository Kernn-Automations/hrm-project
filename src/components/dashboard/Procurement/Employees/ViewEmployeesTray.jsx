// src/components/Employee/ViewEmployeeTray.jsx
import React from "react";
import SidePopupBox from "@/utils/SidePopupBox";
import styles from "./ManageEmployees.module.css";

const ViewEmployeesTray = ({ open, onClose, employee }) => {
  if (!employee) return null;

  return (
    <SidePopupBox title="View Employee" open={open} onClose={onClose}>
      <div className={styles.popupContent}>
        <p><strong>Emp ID:</strong> {employee.empId}</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Mobile:</strong> {employee.mobile}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Roles:</strong> {employee.roles.join(", ")}</p>
        <p><strong>Status:</strong> {employee.enabled ? "Enabled" : "Disabled"}</p>
      </div>
    </SidePopupBox>
  );
};

export default ViewEmployeesTray;
