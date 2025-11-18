import CentralNavBar from "@/utils/CentralNavBar";
import { useLocation,useNavigate } from "react-router-dom";

function IndentsHeader() {
    const navigate = useNavigate();
    const location = useLocation();

  return (
    <>
      <CentralNavBar>
        <button
          className={`${
            location.pathname === "/indents"
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/indents")}
        >
          + New Indent
        </button>
        <button
          className={`${
            location.pathname.includes("/approvals")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/indents/approvals")}
        >
          Approvals
        </button>
        <button
          className={`${
            location.pathname.includes("/status")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/indents/status")}
        >
          Status
        </button>
        <button
          className={`${
            location.pathname.includes("/consumptions")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/indents/consumptions")}
        >
          Consumptions
        </button>
        <button
          className={`${
            location.pathname.includes("/report")
              ? "active-central-navbar"
              : ""
          }`}
          onClick={() => navigate("/indents/report")}
        >
          Reports
        </button>
      </CentralNavBar>
    </>
  );
}


export default IndentsHeader;