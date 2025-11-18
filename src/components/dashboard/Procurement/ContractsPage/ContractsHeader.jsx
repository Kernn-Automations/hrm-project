import React from "react";
import CentralNavBar from "@/utils/CentralNavBar";
import { useLocation, useNavigate } from "react-router-dom";

function ContractsHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <CentralNavBar>
        
        <button
          className={`${
            location.pathname === "/contracts"
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/contracts")}
        >
          + Add
        </button>
        <button
          className={`${
            location.pathname.includes("/delete")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/contracts/delete")}
        >
          - Delete
        </button>
        <button
          className={`${
            location.pathname.includes("/ongoing")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/contracts/ongoing")}
        >
          Ongoing
        </button>
      </CentralNavBar>
    </>
  );
}

export default ContractsHeader;
