import React from "react";
import CentralNavBar from "@/utils/CentralNavBar";
import { useLocation, useNavigate } from "react-router-dom";

function LeaveManagementHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <CentralNavBar>
        {/* <button
          className={`${
            location.pathname === "/leave-management"
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/leave-management")}
        ></button> */}
        <button
          className={`${
            location.pathname === "/leave-management"
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/leave-management")}
        >
          Apply for Leave
        </button>
        <button
          className={`${
            location.pathname.includes("/pendings")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/leave-management/pendings")}
        >
          Pendings
        </button>
        <button
          className={`${
            location.pathname.includes("/approvals")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/leave-management/approvals")}
        >
          Approvals
        </button>
      </CentralNavBar>
    </>
  );
}

export default LeaveManagementHeader;
