import React from "react";
import CentralNavBar from "@/utils/CentralNavBar";
import { useLocation, useNavigate } from "react-router-dom";

function EmployeesHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/employees"
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/employees")}
        >
          Create Employee
        </button>
        <button
          className={`${
            location.pathname.includes("/assign-role")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/employees/assign-role")}
        >
          Assign Role
        </button>
        <button
          className={`${
            location.pathname.includes("/manage-employees")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/employees/manage-employees")}
        >
          Manage Employees
        </button>
      </CentralNavBar>
    </>
  );
}

export default EmployeesHeader;
