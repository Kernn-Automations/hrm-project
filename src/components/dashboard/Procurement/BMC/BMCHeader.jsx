import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import CentralNavBar from "@/utils/CentralNavBar";

function BMCHeader(){
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <>
            <CentralNavBar>
                <button
          className={`${
            location.pathname === "/bmc"
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/bmc")}
        >
          BMC's/CC's
        </button>
            </CentralNavBar>
        </>
    );
}

export default BMCHeader;