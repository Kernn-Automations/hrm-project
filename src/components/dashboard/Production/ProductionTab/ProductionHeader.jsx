import CentralNavBar from "@/utils/CentralNavBar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProductionHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/productions" ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/productions")}
        >
          Analysis
        </button>
        <button
          className={`${
            location.pathname.includes("/reports") ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/productions/reports")}
        >
          Reports
        </button>
        
      </CentralNavBar>
    </>
  );
}

export default ProductionHeader;
