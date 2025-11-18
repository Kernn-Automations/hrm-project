import React from "react";
import PaymentsHeader from "./PaymentsHeader";
import { Route, Routes, useNavigate } from "react-router-dom";
import Payments from "./Payments";

function VLAPaymentsRouting() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <PaymentsHeader />
        <Routes>
          <Route index element={<Payments navigate={navigate} />} />
        </Routes>
      </div>
    </>
  );
}

export default VLAPaymentsRouting;
