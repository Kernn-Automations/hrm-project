import CentralNavBar from "@/utils/CentralNavBar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MilkHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/milk-collection" ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/milk-collection")}
        >
         Milk Collection
        </button>
       
      </CentralNavBar>
    </>
  );
}

export default MilkHeader;
