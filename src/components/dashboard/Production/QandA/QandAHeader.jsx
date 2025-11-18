import CentralNavBar from "@/utils/CentralNavBar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function QandAHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/q-and-a" ? "active-central-navbar" : ""
          }`}
          onClick={() => navigate("/q-and-a")}
        >
          Q & A
        </button>
       
      </CentralNavBar>
    </>
  );
}

export default QandAHeader;
