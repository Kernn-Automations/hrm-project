import React from "react";
import CentralNavBar from "@/utils/CentralNavBar";
import { useLocation, useNavigate } from "react-router-dom";

function ReportsHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/reports" ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/reports")}
        >
          Home
        </button>
        <button
          className={`${
            location.pathname.includes("/rmrd") ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/reports/rmrd")}
        >
          RMRD
        </button>
        <button
          className={`${
            location.pathname.includes("/vla-payments")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/reports/vla-payments")}
        >
          VLA Payments
        </button>
      </CentralNavBar>
    </>
  );
}

export default ReportsHeader;
