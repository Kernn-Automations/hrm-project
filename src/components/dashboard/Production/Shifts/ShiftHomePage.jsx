import React from "react";
import { useNavigate } from "react-router-dom";

function ShiftHomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="row m-0 p-0">
        <div className="col">
          <button
            className={`homebtn`}
            onClick={() => navigate("/shifts/shedule")}
          >
            Shift Shedule
          </button>
          <button
            className={`homebtn`}
            onClick={() => navigate("/shifts/manage")}
          >
            Manage Shifts
          </button>
        </div>
      </div>
    </>
  );
}

export default ShiftHomePage;
