import React from "react";
// import CentralNavBar from "../../../utils/CentralNavBar";
import { useLocation, useNavigate } from "react-router-dom";
import CentralNavBar from "@/utils/CentralNavBar";

function LiveLocationsHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  
  return (
    <>
      <CentralNavBar>
        
        <button
          className={`${
            location.pathname === "/live-locations"
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/live-locations")}
        >
          Live Locations
        </button>
        
      </CentralNavBar>
    </>
  );
}

export default LiveLocationsHeader;
