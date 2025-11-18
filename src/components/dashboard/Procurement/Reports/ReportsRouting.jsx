import React, { lazy, Suspense } from "react";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";


import { Route, Routes, useNavigate } from "react-router-dom";
import ReportsHeader from "./ReportsHeader";
import DropdownSkeleton from "@/SkeletonLoaders/DropdownSkeleton";

// Lazy-loaded report components
const ReportsHome = lazy(() => import("./ReportsHome"));
const RMRD = lazy(() => import("./RMRD"));
const VLAPayments = lazy(() => import("./VLAPayments"));

function ReportsRouting() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <ReportsHeader />
      <Suspense fallback={<DropdownSkeleton />}>
        <Routes>
          <Route index element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <ReportsHome navigate={navigate} />
            </Suspense>
          } />
          <Route path="/rmrd/*" element={<RMRD navigate={navigate} />} />
          <Route path="/vla-payments/*" element={<VLAPayments navigate={navigate} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default ReportsRouting;
