import CentralNavBar from "@/utils/CentralNavBar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MilkBillHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/milk-bill" ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/milk-bill")}
        >
          Milk Bill
        </button>
      </CentralNavBar>
    </>
  );
}

export default MilkBillHeader;
