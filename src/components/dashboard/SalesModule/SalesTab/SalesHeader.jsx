import CentralNavBar from "@/utils/CentralNavBar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Sales.module.css";

function SalesHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/sales" ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/sales")}
        >
          Analysis
        </button>
        <button
          className={`${
            location.pathname.includes("/sales-indent")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/sales/sales-indent")}
        >
          Indents
        </button>
        <button
          className={`${
            location.pathname.includes("/damage-and-return")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/sales/damage-and-return")}
        >
          Damage & Return
        </button>
        <button
          className={`${
            location.pathname.includes("/invoices")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/sales/invoices")}
        >
          Sales & Invoice
        </button>
        <button
          className={`${
            location.pathname.includes("/delivery-challan")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/sales/delivery-challan")}
        >
          Delivery Challans
        </button>
       
        <button
          className={`${
            location.pathname.includes("/payments")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/sales/payments")}
        >
          Payments
        </button>
        
      </CentralNavBar>
    </>
  );
}

export default SalesHeader;
