import React, { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PurchasesHeader from "./PurchasesHeader";
import NewPurchases from "./NewPurchases";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";
import DropdownSkeleton from "@/SkeletonLoaders/DropdownSkeleton";

const OrderReports = lazy(() => import('./OrderReports'))
const Vendors = lazy(() => import('./Vendors'))

function PurchasesRouting() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <PurchasesHeader />
        <Routes>
          <Route index element={<NewPurchases navigate={navigate} />} />
          <Route
            path="/purchases-report/*"
            element={
              <Suspense fallback={<SquareTableSkeleton/>}>
                <OrderReports navigate={navigate} />
              </Suspense>
            }
          />
          <Route
            path="/vendors/*"
            element={
              <Suspense fallback={<DropdownSkeleton/>}>
                <Vendors navigate={navigate} />
              </Suspense>
            }
          />

        </Routes>
      </div>
    </>
  );
}

export default PurchasesRouting;
