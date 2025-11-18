import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NewMilkCollection from "./NewMilkCollection";
import MilkHeader from "./MilkHeader";

function MilkCollectionRouting() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <MilkHeader />
        <Routes>
          <Route index element={<NewMilkCollection navigate={navigate} />} />
        </Routes>
      </div>
    </>
  );
}

export default MilkCollectionRouting;
