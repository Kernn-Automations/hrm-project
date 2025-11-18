import React, { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Analysis from "./Analysis";
import ProductionHeader from "./ProductionHeader";
import AnalysisForm from "./AnalysisForm";
import DropdownSkeleton from "@/SkeletonLoaders/DropdownSkeleton";

const Reports = lazy(() => import('./Reports'))

function ProductionTabRouting() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <ProductionHeader />
        <Routes>
          <Route index element={<Analysis navigate={navigate} />} />
          <Route path="/Reports/*" element={
            <Suspense fallback={<DropdownSkeleton/>}>
              <Reports navigate={navigate} />
            </Suspense>
          } />
           <Route path="/Analysis-form" element={<AnalysisForm navigate={navigate} />} />
        </Routes>
      </div>
    </>
  );
}

export default ProductionTabRouting;
