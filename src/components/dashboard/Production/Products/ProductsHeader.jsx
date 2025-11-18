import CentralNavBar from "@/utils/CentralNavBar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DeletePopup from "./DeletePopup";

function ProductsHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/products" ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/products")}
        >
          + Add Product
        </button>

        <DeletePopup
          btnName={"Delete"}
          btnStyling={`${
            location.pathname.includes("/delete") ? "active-central-navbar" : ""
          }`}
        />

        <button
          className={`${
            location.pathname.includes("/ongoing")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/products/ongoing")}
        >
          Ongoing
        </button>
      </CentralNavBar>
    </>
  );
}

export default ProductsHeader;
