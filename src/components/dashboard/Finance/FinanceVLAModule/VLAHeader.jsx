import React from "react";
import styles from "./FinanceVLA.module.css";
import CentralNavBar from "@/utils/CentralNavBar";
import { useLocation, useNavigate } from "react-router-dom";
function VLAHeader() {
    const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/vlas" ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/vlas")}
        >
          Home
        </button>
        <button
          className={`${
            location.pathname.includes("/vla-payments")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/vlas/vla-payments")}
        >
          VLA Payments
        </button>
      </CentralNavBar>
    </>
  );
}

export default VLAHeader;
