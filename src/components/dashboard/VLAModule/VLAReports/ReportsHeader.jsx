import CentralNavBar from "@/utils/CentralNavBar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ReportsHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/payments" ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/payments")}
        >
          Payments
        </button>
      </CentralNavBar>
    </>
  );
}

export default ReportsHeader;
