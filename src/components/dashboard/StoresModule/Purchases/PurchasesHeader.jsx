import React from "react";

import styles from "./Purchases.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import CentralNavBar from "@/utils/CentralNavBar";

function PurchasesHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/purchases" ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/purchases")}
        >
          + New Purchase
        </button>
        <button
          className={`${
            location.pathname.includes("/purchases-report")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/purchases/purchases-report")}
        >
          Purchase Report
        </button>
        <button
          className={`${
            location.pathname.includes("/vendors")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/purchases/vendors")}
        >
          Vendors
        </button>
      </CentralNavBar>
    </>
  );
}

export default PurchasesHeader;
