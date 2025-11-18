import React, { useState } from "react";
import styles from "./AdminPage.module.css";
import smallLogo from "../../images/smallLogo.png";
import { useNavigate } from "react-router-dom";

// Only Sales roles
const salesRoles = ["Admin & Office Staff", "Employee"];

function AdminPage({ setRole, role }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setRole(role);
    navigate("/"); // Redirect after selecting role
  };

  const handleLogout = () => {
    // implement logout logic if needed
  };

  return (
    <div className={styles.container}>
      {/* Logo and Heading */}
      <div className={styles.logo}>
        <img src={smallLogo} alt="Logo" className={styles.logoImage} />
        <h6>KERNN AUTOMATIONS</h6>
      </div>

      <p className={styles.welcome}>
        Welcome! <strong>Karthik Makkena</strong>
      </p>

      {/* Role Selection (Sales only) */}
      {!role && (
        <div className={styles.subDepartments}>
          <p>You have multiple Roles in Sales, please choose one to Login</p>
          <div className={styles.departments}>
            {salesRoles.map((r, i) => (
              <div
                key={i}
                className={styles.department}
                onClick={() => handleRoleClick(r)}
              >
                <span>{r}</span>
                <span className={styles.access}>access : allowed</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AdminPage;
